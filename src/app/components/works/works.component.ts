import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false}) infinityScroll: IonInfiniteScroll;
  @Input() hide = false;
  @Output() dataRequest = new EventEmitter<any>();
  @Output() totalChanged = new EventEmitter<number>();

  private coversUrl = environment.coversUrl;
  // tslint:disable-next-line: variable-name
  private _total: number;
  works: any[];

  constructor() { }

  ngOnInit() {}

  set total(total) {
    this._total = total;
    console.log('set total: ', total);
    this.totalChanged.emit(total);
  }

  loadData(event) {
    console.log('load data - fetching offset=', this.works.length, ' total=', this._total);
    if (this.works.length >= this._total) {
      event.target.disabled = true;
      return;
    }
    this.dataRequest.emit(() => {
      event.target.complete();
      if (this.works.length >= this._total) {
        event.target.disabled = true;
      }
    });
  }

  reset() {
    this.works = [];
    this._total = 0;
    this.infinityScroll.complete();
    this.infinityScroll.disabled = false;
  }

  getCoverUrl(work) {
    return work && work.coverId ? `${this.coversUrl}/w/id/${work.coverId}-S.jpg` : '/assets/img/cover-not-available.jpg';
  }

  addWork(work: any) {
    this.works.push(work);
  }
}
