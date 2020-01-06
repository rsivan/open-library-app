import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service';
import { take } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { WorksComponent } from '../../components/works/works.component';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.page.html',
  styleUrls: ['./subject-page.page.scss'],
})
export class SubjectPagePage implements AfterViewInit {

  @ViewChild(WorksComponent, { static: false }) worksComponent: WorksComponent;

  subjectId: string;
  subjectTitle: string;
  total = 0;
  numberLoaded = 0;
  filter = '';

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SubjectsService,
    private searchService: SearchService) { }

  ngAfterViewInit() {
    this.subjectTitle = this.route.snapshot.paramMap.get('subjectTitle');
    this.subjectId = this.subjectTitle.toLowerCase().replace(/ /g, '_');
    console.log('Subject: ', this.subjectTitle);
    this.reset();
    this.fetchData();
  }

  fetchData(onFetchComplete = null) {
    if (this.filter) {
      console.log('Searching for : ', this.filter);
      this.searchService.search(this.filter, Math.floor(1 + this.numberLoaded / 100)).pipe(
        take(1)
      ).subscribe(res => {
        console.log('Search results: ', res);
        this.worksComponent.total = this.total = res.num_found;
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
          this.addWork(work);
        });
        if (onFetchComplete) {
          onFetchComplete();
        }
      });
    } else {
      this.subjectsService.fetchSubjectSummary(this.subjectId, this.numberLoaded).pipe(
        take(1)
      ).subscribe(res => {
        console.log('res: ', res);
        this.worksComponent.total = this.total = res.work_count;
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
          this.addWork(work);
        });
        if (onFetchComplete) {
          onFetchComplete();
        }
      });
    }
  }

  onSearchChange(event) {
    this.filter = event.detail.value;
    console.log('filter: ', this.filter);
    this.reset();
    this.fetchData();
  }

  private reset() {
    this.numberLoaded = 0;
    this.total = 0;
    this.worksComponent.reset();
  }

  private addWork(work: any) {
    this.worksComponent.addWork(work);
    ++this.numberLoaded;
  }
}
