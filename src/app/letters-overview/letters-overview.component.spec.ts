import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersOverviewComponent } from './letters-overview.component';

describe('LettersOverviewComponent', () => {
  let component: LettersOverviewComponent;
  let fixture: ComponentFixture<LettersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettersOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
