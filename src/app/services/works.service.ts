import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  fetchWork(workId: string) {
    return this.http.get<any>(`${this.apiUrl}/works/${workId}.json`);
  }
}
