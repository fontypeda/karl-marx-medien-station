import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-letters-overview',
  templateUrl: './letters-overview.component.html',
  styleUrls: ['./letters-overview.component.scss']
})
export class LettersOverviewComponent implements OnInit {

  letterGroupOverview: any[];
  isoCode: string;
  // Are there any english letters
  englishLettersAvailable: boolean;
  constructor(
    private data: DataService,
    private languageService: LanguageService
  ) {
    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      this.isoCode = isoCode;
      this.letterGroupOverview = this.data.getLetterOverview(this.isoCode);
      this.englishLettersAvailable = this._checkEnglishAvailability();
    });

  }


  ngOnInit() {
    this.letterGroupOverview = this.data.getLetterOverview(this.isoCode);
    this.englishLettersAvailable = this._checkEnglishAvailability(); 
  }

  private _checkEnglishAvailability(): boolean {
    let available: boolean = false;
    this.letterGroupOverview.forEach((letterGroup) => {
      if (letterGroup.has_en) {
        available = true
      }
    });
    return available;
  }

}
