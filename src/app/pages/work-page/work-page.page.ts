import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorksService } from '../../services/works.service';
import { take } from 'rxjs/operators';
import { Work } from '../../interfaces/work';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.page.html',
  styleUrls: ['./work-page.page.scss'],
})
export class WorkPagePage implements OnInit {

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
        authors: res.authors.map(a => ({
          name: a.author.key,
          url: a.author.key,
        })
        )
      };
      this.work.authors.forEach(a => {
        this.authorsService.fetchWork(a.url).subscribe(authRes => {
          a.name = authRes.name;
        });
      });
      console.log('work: ', this.work);
    });
  }

}
