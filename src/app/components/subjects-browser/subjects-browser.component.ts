import { Component, OnInit } from '@angular/core';
import { SubjectSummary } from '../../interfaces/subject-summary';
import { SubjectsService } from '../../services/subjects.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-subjects-browser',
  templateUrl: './subjects-browser.component.html',
  styleUrls: ['./subjects-browser.component.scss'],
})
export class SubjectsBrowserComponent implements OnInit {

  subjects: SubjectSummary[];

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit() {
    this.subjects = this.subjectsService.getSubjects();
    this.subjects.forEach(s => {
      this.subjectsService.fetchSubjectSummary(s.id).pipe(
        take(1)
      ).subscribe(res => {
        // console.log('res: ', res);
        s.total = res.work_count;
      });
    });
  }

  getImageUrl(subj: SubjectSummary) {
    return `http://openlibrary.org/static/images/categories/${subj.image}`;
  }

}
