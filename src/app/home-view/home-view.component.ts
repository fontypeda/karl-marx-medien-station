import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  isoCode: string;
  hasSources: boolean;
  hasBiographies: boolean;

  cityPortrait: any = {
        name: {
          'de': "Stadtportrait",
          'en': "City Portrait"
        },
        link: "./cityportrait"
      };
  biographies: any =     {
        name: {
          "en": "Biographies",
          "de": "Biographien"
        },
        link: "./biographies"
      };

  letters: any = {
    name: {
      "de": "Briefe",
      "en": "Letters"
    },
    link: "./letters"
  };

  sources: any = {
    name: {
      "de": "Archivalien",
      "en": "Archive"
    },
    link: "./sources"
  }

  constructor(
    private dataService: DataService,
    private languageService: LanguageService
  ) {
    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      this.isoCode = isoCode;
    });
    this.hasSources = this.dataService.hasSources();
    this.hasBiographies = this.dataService.hasBiographies(); 
  }


  ngOnInit() {
    this.isoCode = this.languageService.getIsoCode();
  }

}
