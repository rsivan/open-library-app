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
    private subjectsService: SubjectsService) { }

  ngAfterViewInit() {
    this.subjectTitle = this.route.snapshot.paramMap.get('subjectTitle');
    this.subjectId = this.subjectTitle.toLowerCase().replace(/ /g, '_');
    console.log('Subject: ', this.subjectTitle);
    this.reset();
    this.fetchData();
  }

  fetchData(onFetchComplete = null) {
    if (!this.filter) {
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
    console.log('filter: ', event);
    const prevFilter = this.filter;
    this.filter = event;
    if (prevFilter && !this.filter) {
      // refresh 'subject', now newly visible
      this.reset();
      this.fetchData();
    }
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

  totalChanged(total) {
    console.log('Total: ', total);
    this.total = total;
  }
}
