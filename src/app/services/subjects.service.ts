import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SubjectSummary } from '../interfaces/subject-summary';
import { Observable, of, concat } from 'rxjs';
import { map } from 'rxjs/operators';

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

  private subjectIdsList: string[] = [];

  private subjectsMap: Map<string, SubjectSummary> = new Map();

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.subjectsList.forEach(s => {
      const id1 = s.toLowerCase().replace(/ /g, '_');
      const val: SubjectSummary = {
        title: s,
        id: id1,
        total: 0,
      };
      this.subjectsMap.set(id1, val);
      this.subjectIdsList.push(id1);
    });
  }

  getSubjects(): SubjectSummary[] {
    return this.subjectIdsList.map(sid => this.getSubject(sid));
  }

  getSubject(subjectId): SubjectSummary {
    return { ...this.subjectsMap.get(subjectId) };
  }

  fetchSubjectSummary(subject: string) {
    return this.http.get<any>(`${this.apiUrl}/subjects/${subject}.json`);
  }
}
