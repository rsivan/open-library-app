import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.page.html',
  styleUrls: ['./subject-page.page.scss'],
})
export class SubjectPagePage implements OnInit {

  subject = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get('id');
  }

}
