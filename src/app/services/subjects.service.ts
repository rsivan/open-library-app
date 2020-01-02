import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SubjectSummary } from '../interfaces/subject-summary';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private subjectsList: string[] = [
    'Art',
    'Fantasy',
    'Biographies',
    'Science',
    'Recipes',
    'Romance',
    'Religion',
    'Mystery and Detective Stories',
    'Music',
    'Medicine',
    'Plays',
    'History',
    'Children',
    'Science Fiction',
    'Textbooks',
  ];

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get subjects(): SubjectSummary[] {
    return this.subjectsList.map(s => {
      return {
        title: s,
        id: s.toLowerCase().replace(/ /g, '_'),
      };
    });
  }

  getSubjectDetails(subject) {
    return this.subjects.find(s => s.id === subject);
  }

  getSubjectSummary(subject: string) {
    return this.http.get<any>(`${this.apiUrl}/subjects/${subject}.json`);
  }
}
