import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingTranslationComponent } from './missing-translation.component';

describe('MissingTranslationComponent', () => {
  let component: MissingTranslationComponent;
  let fixture: ComponentFixture<MissingTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
