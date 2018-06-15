import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-transcription-dialog',
  templateUrl: './transcription-dialog.component.html',
  styleUrls: ['./transcription-dialog.component.scss']
})
export class TranscriptionDialogComponent implements OnInit {

  isoCode: string;
  constructor(
    public dialogRef: MatDialogRef<TranscriptionDialogComponent>,
    private languageService: LanguageService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isoCode = this.languageService.getIsoCode(); 
  }

  ngOnInit() {
  }

}
