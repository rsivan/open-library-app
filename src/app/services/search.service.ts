import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  search(searchTerm: string, page: number = 1) {
    return this.http.get<any>(`${this.apiUrl}/search.json?q=${searchTerm}&page=${page}`);
  }
}
