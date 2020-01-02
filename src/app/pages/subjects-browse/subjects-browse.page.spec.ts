import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubjectsBrowsePage } from './subjects-browse.page';

describe('SubjectsBrowsePage', () => {
  let component: SubjectsBrowsePage;
  let fixture: ComponentFixture<SubjectsBrowsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsBrowsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectsBrowsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
