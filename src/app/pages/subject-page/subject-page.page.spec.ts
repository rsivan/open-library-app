import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubjectPagePage } from './subject-page.page';

describe('SubjectPagePage', () => {
  let component: SubjectPagePage;
  let fixture: ComponentFixture<SubjectPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
