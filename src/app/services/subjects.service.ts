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

  private subjectsList: SubjectSummary[] = [
    this.summary('Art'),
    this.summary('Fantasy'),
    this.summary('Biographies'),
    this.summary('Science'),
    this.summary('Recipes'),
    this.summary('Romance'),
    this.summary('Religion'),
    this.summary('Mystery and Detective Stories'),
    this.summary('Music'),
    this.summary('Medicine'),
    this.summary('Plays'),
    this.summary('History'),
    this.summary('Children'),
    this.summary('Science Fiction'),
    this.summary('Textbooks'),
  ];

  private subjectsMap: Map<string, SubjectSummary> = new Map();

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.subjectsList.forEach(s => {
      this.subjectsMap.set(s.id, s);
    });
  }

  getSubjects(): SubjectSummary[] {
    return this.subjectsList.map(s => {
      return {...s};
    });
  }

  getSubject(subjectId): SubjectSummary {
    return { ...this.subjectsMap.get(subjectId) };
  }

  fetchSubjectSummary(subject: string, offset = 0, limit = 20) {
    return this.http.get<any>(`${this.apiUrl}/subjects/${subject}.json?limit=${limit}&offset=${offset}`);
  }

  private summary(title: string): SubjectSummary {
    const id1 = title.toLowerCase().replace(/ /g, '_');
    const val: SubjectSummary = {
      title,
      id: id1,
      total: 0,
      image: `${id1}.svg`,
    };
    return val;
  }
}
