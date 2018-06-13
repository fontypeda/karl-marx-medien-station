import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  bioInfo: any;
  bioId: string;
  isoCode: string;

  constructor(
    private data: DataService,
    private languageService: LanguageService,
    private _location: Location,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    console.log("WTF");
    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      this.isoCode = isoCode;
    });
    this.bioId = this.route.snapshot.paramMap.get('bioid');
    let lang = this.route.snapshot.paramMap.get('lang');
    this.bioInfo = this.data.getBioInfo(this.bioId)
    console.log(this.bioId);
    console.log(this.bioInfo);
  }

  goBack() {
    this._location.back()
  }

}
