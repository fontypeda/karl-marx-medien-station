import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyGroupOverviewComponent } from './biography-group-overview.component';

describe('BiographyGroupOverviewComponent', () => {
  let component: BiographyGroupOverviewComponent;
  let fixture: ComponentFixture<BiographyGroupOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographyGroupOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographyGroupOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
