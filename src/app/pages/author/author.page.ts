import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.page.html',
  styleUrls: ['./author.page.scss'],
})
export class AuthorPage implements OnInit {

  authorId: string;

  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService) { }

  ngOnInit() {
    this.authorId = this.route.snapshot.paramMap.get('id');
  }

}
