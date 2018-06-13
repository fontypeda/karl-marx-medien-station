import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaloonSelectorComponent } from './baloon-selector.component';

describe('BaloonSelectorComponent', () => {
  let component: BaloonSelectorComponent;
  let fixture: ComponentFixture<BaloonSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaloonSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaloonSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
