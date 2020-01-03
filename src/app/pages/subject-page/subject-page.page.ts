import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service';
import { SubjectSummary } from '../../interfaces/subject-summary';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.page.html',
  styleUrls: ['./subject-page.page.scss'],
})
export class SubjectPagePage implements OnInit {

  subject: SubjectSummary;

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SubjectsService) { }

  ngOnInit() {
    const subjectId = this.route.snapshot.paramMap.get('id');
    this.subject = this.subjectsService.getSubject(subjectId);
  }

  ionViewWillEnter() {
  }

}
