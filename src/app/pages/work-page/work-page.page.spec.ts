import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkPagePage } from './work-page.page';

describe('WorkPagePage', () => {
  let component: WorkPagePage;
  let fixture: ComponentFixture<WorkPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
