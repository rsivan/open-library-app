import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service';
import { SubjectSummary } from '../../interfaces/subject-summary';
import { take } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.page.html',
  styleUrls: ['./subject-page.page.scss'],
})
export class SubjectPagePage implements OnInit {

  private coversUrl = environment.coversUrl;
  subject: SubjectSummary;
  total = -1;
  works: any[] = [];
  filter = '';

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SubjectsService,
    private searchService: SearchService) { }

  ngOnInit() {
    const subjectId = this.route.snapshot.paramMap.get('id');
    this.subject = this.subjectsService.getSubject(subjectId);
    this.fetchData();
  }

  ionViewWillEnter() {
  }

  private fetchData(onFetchComplete = null) {
    if (this.filter) {
      console.log('Searching for : ', this.filter);
      this.searchService.search(this.filter, Math.floor(1 + this.works.length / 100)).pipe(
        take(1)
      ).subscribe(res => {
        console.log('Search results: ', res);
        this.total = res.num_found;
        res.docs.forEach(doc => {
          let key = doc.key as string;
          if (key) {
            key = key.replace(/\/works\//, '');
          }
          const work = {
            key,
            title: doc.title,
            authors: doc.author_name ?
              doc.author_name.map(n => ({
                name: n
              })) : [],
            coverId: doc.cover_i,
          };
          this.works.push(work);
        });
        if (onFetchComplete) {
          onFetchComplete();
        }
      });
    } else {
      this.subjectsService.fetchSubjectSummary(this.subject.id, this.works.length).pipe(
        take(1)
      ).subscribe(res => {
        console.log('res: ', res);
        this.total = res.work_count;
        res.works.forEach(w => {
          let key = w.key as string;
          if (key) {
            key = key.replace(/\/works\//, '');
          }
          const work = {
            key,
            title: w.title,
            authors: w.authors,
            coverId: w.cover_id,
          };
          this.works.push(work);
        });
        if (onFetchComplete) {
          onFetchComplete();
        }
      });
    }
  }

  loadData(event) {
    console.log('load data - fetching offset=', this.works.length);
    if (this.total >= 0 && this.works.length >= this.total) {
      event.target.disabled = true;
      return;
    }
    this.fetchData(() => {
      event.target.complete();
      if (this.works.length >= this.total) {
        event.target.disabled = true;
      }
    });
  }

  onSearchChange(event) {
    this.filter = event.detail.value;
    console.log('filter: ', this.filter);
    this.works = [];
    this.total = -1;
    this.fetchData();
  }

  getCoverUrl(work) {
    return work && work.coverId ? `${this.coversUrl}/w/id/${work.coverId}-S.jpg` : null;
  }
}
