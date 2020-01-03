import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service';
import { SubjectSummary } from '../../interfaces/subject-summary';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.page.html',
  styleUrls: ['./subject-page.page.scss'],
})
export class SubjectPagePage implements OnInit {

  subject: SubjectSummary;
  total = -1;
  works: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SubjectsService) { }

  ngOnInit() {
    const subjectId = this.route.snapshot.paramMap.get('id');
    this.subject = this.subjectsService.getSubject(subjectId);
    this.subjectsService.fetchSubjectSummary(this.subject.id).pipe(
      take(1)
    ).subscribe(res => {
      console.log('res: ', res);
      this.total = res.work_count;
      console.log('res works: ', res.works);
      res.works.forEach(w => {
        this.works.push(w);
      });
    });
  }

  ionViewWillEnter() {
  }

  loadData(event) {
    console.log('load data - fetching offset=', this.works.length);
    if (this.total >= 0 && this.works.length >= this.total) {
      event.target.disabled = true;
      return;
    }
    this.subjectsService.fetchSubjectSummary(this.subject.id, this.works.length).pipe(
      take(1)
    ).subscribe(res => {
      this.total = res.work_count;
      console.log('res works: ', res.works);
      res.works.forEach(w => {
        this.works.push(w);
      });
      event.target.complete();
      if (this.works.length >= this.total) {
        event.target.disabled = true;
      }
    });
  }
}
