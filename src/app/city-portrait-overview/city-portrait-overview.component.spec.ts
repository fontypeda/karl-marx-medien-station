import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPortraitOverviewComponent } from './city-portrait-overview.component';

describe('CityPortraitOverviewComponent', () => {
  let component: CityPortraitOverviewComponent;
  let fixture: ComponentFixture<CityPortraitOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPortraitOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPortraitOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
