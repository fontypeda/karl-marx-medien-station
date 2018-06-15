import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptionDialogComponent } from './transcription-dialog.component';

describe('TranscriptionDialogComponent', () => {
  let component: TranscriptionDialogComponent;
  let fixture: ComponentFixture<TranscriptionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
