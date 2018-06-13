import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPortraitComponent } from './city-portrait.component';

describe('CityPortraitComponent', () => {
  let component: CityPortraitComponent;
  let fixture: ComponentFixture<CityPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
