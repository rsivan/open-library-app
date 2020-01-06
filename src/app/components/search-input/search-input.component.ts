import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {

  @Output() searchChange = new EventEmitter<string>();
  filter = '';

  constructor() { }

  ngOnInit() {}

  onSearchChange(event) {
    this.filter = event.detail.value;
    console.log('filter: ', this.filter);
    this.searchChange.emit(this.filter);
  }

}
