import { Component, OnInit, ViewChild } from '@angular/core';
import { WorksComponent } from '../../components/works/works.component';

@Component({
  selector: 'app-subjects-browse',
  templateUrl: './subjects-browse.page.html',
  styleUrls: ['./subjects-browse.page.scss'],
})
export class SubjectsBrowsePage {

  static browseTitle = 'Browse by Subject';
  static searchTitle = 'Search';

  @ViewChild(WorksComponent, { static: false }) worksComponent: WorksComponent;

  total = 0;
  isSearching = false;
  pageTitle = SubjectsBrowsePage.browseTitle;

  constructor() { }

  totalChanged(total) {
    this.total = total;
  }

  onSearchChange(event) {
    console.log('filter: ', event);
    const prevIsSearching = this.isSearching;
    this.isSearching = !!event;
    this.pageTitle = this.isSearching ? SubjectsBrowsePage.searchTitle : SubjectsBrowsePage.browseTitle;
    if (this.isSearching && !prevIsSearching) {
      this.worksComponent.reset();
    }
  }

}
