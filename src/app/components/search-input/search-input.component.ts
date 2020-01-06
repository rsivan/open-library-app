import { Component, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';
import { WorksComponent } from '../works/works.component';
import { SearchService } from '../../services/search.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements AfterViewInit {

  @Input() worksComponent: WorksComponent;
  @Output() searchChange = new EventEmitter<string>();

  total = 0;
  numberLoaded = 0;
  filter = '';

  constructor(
    private searchService: SearchService) { }

  ngAfterViewInit(): void {
    this.worksComponent.dataRequest.subscribe(d => this.fetchData(d));
  }

  onSearchChange(event) {
    this.filter = event.detail.value;
    console.log('filter: ', this.filter);
    this.searchChange.emit(this.filter);

    this.reset();
    this.fetchData();
  }

  fetchData(onFetchComplete = null) {
    if (this.filter) {
      console.log('Searching for : ', this.filter);
      this.searchService.search(this.filter, Math.floor(1 + this.numberLoaded / 100)).pipe(
        take(1)
      ).subscribe(res => {
        console.log('Search results: ', res);
        this.worksComponent.total = this.total = res.num_found;
        res.docs.forEach(doc => {
          let key = doc.key as string;
          if (key) {
            key = key.replace(/\/works\//, '');
          }
          const work = {
            key,
            title: doc.title,
            authors: doc.author_name ?
              doc.author_name.map(n => ({
                name: n
              })) : [],
            coverId: doc.cover_i,
          };
          this.addWork(work);
        });
        if (onFetchComplete) {
          onFetchComplete();
        }
      });
    }
  }

  private reset() {
    this.numberLoaded = 0;
    this.total = 0;
    this.worksComponent.reset();
  }

  private addWork(work: any) {
    this.worksComponent.addWork(work);
    ++this.numberLoaded;
  }
}
