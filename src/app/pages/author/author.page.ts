import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../interfaces/author';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.page.html',
  styleUrls: ['./author.page.scss'],
})
export class AuthorPage implements OnInit {

  private coversUrl = environment.coversUrl;
  authorId: string;
  author: Author = null;

  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService) { }

  ngOnInit() {
    this.authorId = this.route.snapshot.paramMap.get('id');
    this.authorsService.fetchAuthor(this.authorId).subscribe(a => {
      this.author = a;
    });
  }

  getPhotoUrls() {
    if (!this.author) {
      return null;
    }
    return this.author.photos.map(photo => `${this.coversUrl}/w/id/${photo}-L.jpg`);
  }
}
