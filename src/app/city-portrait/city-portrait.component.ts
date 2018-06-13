import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';

import { LanguageService } from '../services/language.service';
import { cities } from '../vars/city-portrait';

@Component({
  selector: 'app-city-portrait',
  templateUrl: './city-portrait.component.html',
  styleUrls: ['./city-portrait.component.scss']
})
export class CityPortraitComponent implements OnInit {

  cities: any[] = cities;
  city: any;
  isoCode: string;
  baseUrl: string;
  constructor(
    private languageService: LanguageService,
    private _location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // TODO: setup for multiple city portraits
    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      this.isoCode = isoCode;
    })
    this.baseUrl = this.router.url.split("#")[0];
    this.city = this.cities[0];
  }

  ngOnInit() {

  }

  goBack() {
    this._location.back()
  }

  public scrollTo(idx: number) {
    let letterElement = document.getElementById('article' + idx);
    letterElement.scrollIntoView();
  }

}
