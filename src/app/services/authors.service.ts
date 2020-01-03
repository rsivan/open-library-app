import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  fetchAuthor(id: string): Observable<Author> {
    return this.http.get<any>(`${this.apiUrl}/authors/${id}.json`).pipe(
      take(1),
      tap(res => {
        console.log('author: ', res);
      }),
      map(res => ({
        id,
        name: res.name,
        bio: res.bio ? (res.bio.value ? res.bio.value : res.bio) : 'No bio',
        photos: res.photos || [],
        birth_date: res.birth_date,
        death_date: res.death_date,
      })
    ));
  }
}
