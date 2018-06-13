import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyOverviewComponent } from './biography-overview.component';

describe('BiographyOverviewComponent', () => {
  let component: BiographyOverviewComponent;
  let fixture: ComponentFixture<BiographyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographyOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
