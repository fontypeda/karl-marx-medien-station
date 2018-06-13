import { Component, OnInit } from '@angular/core';


import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  isoCode: string;
  navTiles: any[] = [
    {
      name: {
        'de': "Stadtportrait",
        'en': "City Portrait"
      },
      link: "./cityportrait"
    },
    {
      name: {
        "en": "Biographies",
        "de": "Biographien"
      },
      link: "./biographies"
    },
    {
      name: {
        "de": "Briefe",
        "en": "Letters"
      },
      link: "./letters"
    },
    {
      name: {
        "de": "Archivalien",
        "en": "Archive"
      },
      link: "./sources"
    },
  ];

  constructor(
    private languageService: LanguageService
  ) {
    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      this.isoCode = isoCode;
    });
  }


  ngOnInit() {
    this.isoCode = this.languageService.getIsoCode();
  }

}
