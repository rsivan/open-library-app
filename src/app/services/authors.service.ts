import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  fetchWork(authorUrl: string): Observable<Author> {
    return this.http.get<any>(`${this.apiUrl}${authorUrl}.json`).pipe(
      take(1),
      map(res => ({
        url: authorUrl,
        name: res.name,
      })
    ));
  }
}
