import { Component, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-letters-display',
  templateUrl: './letters-display.component.html',
  styleUrls: ['./letters-display.component.scss']
})
export class LettersDisplayComponent implements OnInit {

  letters: any;
  isoCode: string;
  baseUrl: string;
  hasEn: boolean;

  constructor(
    private dataService: DataService,
    private el: ElementRef,
    private languageService: LanguageService,
    private _location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      this.isoCode = isoCode;
    });
    let groupId = this.route.snapshot.paramMap.get('lettergroup');
    this.baseUrl = this.router.url.split("#")[0];
    this.hasEn = this.dataService.letterGroupHasEn(groupId);
    this.letters = this.dataService.getLettersForGroup(groupId);

  }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

  public scrollTo(idx: number) {
    console.log("Scrolling to Letter" + idx);
    let nativeElement: HTMLElement = this.el.nativeElement;
    let letterElement = document.getElementById('letter' + idx);
    letterElement.scrollIntoView();
    // nativeElement.scrollTo(letterElement);
    console.log(letterElement);
  }

}
