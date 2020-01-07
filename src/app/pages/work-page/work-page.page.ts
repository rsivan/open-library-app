import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorksService } from '../../services/works.service';
import { take } from 'rxjs/operators';
import { Work } from '../../interfaces/work';
import { AuthorsService } from '../../services/authors.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.page.html',
  styleUrls: ['./work-page.page.scss'],
})
export class WorkPagePage implements OnInit {

  private coversUrl = environment.coversUrl;
  workId: string;
  work: Work;

  constructor(
    private route: ActivatedRoute,
    private worksService: WorksService,
    private authorsService: AuthorsService) { }


  ngOnInit() {
    this.workId = this.route.snapshot.paramMap.get('id');
    this.worksService.fetchWork(this.workId).pipe(
      take(1)
    ).subscribe(res => {
      console.log('res: ', res);
      this.work = {
        id: this.workId,
        title: res.title,
        description: res.description ?
          (res.description.value ? res.description.value : res.description) :
          'There is no description for this book yet.',
        authors: res.authors ? res.authors.map(a => ({
          name: a.author.key,
          id: (a.author.key as string).replace(/\/authors\//, ''),
        })) : [],
        covers: res.covers || [],
        subjects: res.subjects || [],
        subject_people: res.subject_people || [],
        subject_places: res.subject_places || [],
        subject_times: res.subject_times || [],
        last_modified: res.last_modified ? res.last_modified.value : null,
      };
      this.work.authors.forEach(a => {
        this.authorsService.fetchAuthor(a.id).subscribe(authRes => {
          a.name = authRes.name;
        });
      });
      console.log('work: ', this.work);
    });
  }

  getCoverUrls() {
    return this.work && this.work.covers.length > 0 ? this.work.covers.map(c => `${this.coversUrl}/w/id/${c}-L.jpg`) : null;
  }

  getSubjectUrl(subject: string) {
    return `/subjects/${subject.replace(/\//g, '+')}`;
  }
}
