import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false}) infinityScroll: IonInfiniteScroll;
  @Output() dataRequest = new EventEmitter<any>();

  private coversUrl = environment.coversUrl;
  total: number;
  works: any[];

  constructor() { }

  ngOnInit() {}

  loadData(event) {
    console.log('load data - fetching offset=', this.works.length);
    if (this.works.length >= this.total) {
      event.target.disabled = true;
      return;
    }
    this.dataRequest.emit(() => {
      event.target.complete();
      if (this.works.length >= this.total) {
        event.target.disabled = true;
      }
    });
  }

  reset() {
    this.works = [];
    this.total = 0;
    if (this.infinityScroll) {
      this.infinityScroll.disabled = false;
    }
  }

  getCoverUrl(work) {
    return work && work.coverId ? `${this.coversUrl}/w/id/${work.coverId}-S.jpg` : null;
  }

  addWork(work: any) {
    this.works.push(work);
  }
}
