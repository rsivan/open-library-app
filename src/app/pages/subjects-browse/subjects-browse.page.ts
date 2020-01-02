import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import { SubjectSummary } from '../../interfaces/subject-summary';

@Component({
  selector: 'app-subjects-browse',
  templateUrl: './subjects-browse.page.html',
  styleUrls: ['./subjects-browse.page.scss'],
})
export class SubjectsBrowsePage implements OnInit {

  subjects: SubjectSummary[];

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit() {
    this.subjects = this.subjectsService.subjects;
    console.log('Subjects: ', this.subjects);
  }

  onSubjectSelected(event) {
    console.log('onSubjectSelected: ', event);
  }
}
