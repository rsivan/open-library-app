import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import { SubjectSummary } from '../../interfaces/subject-summary';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-subjects-browse',
  templateUrl: './subjects-browse.page.html',
  styleUrls: ['./subjects-browse.page.scss'],
})
export class SubjectsBrowsePage implements OnInit {

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
}
