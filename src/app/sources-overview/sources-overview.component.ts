import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../services/language.service';

import { sources } from '../vars/sources';


@Component({
  selector: 'app-sources-overview',
  templateUrl: './sources-overview.component.html',
  styleUrls: ['./sources-overview.component.scss']
})
export class SourcesOverviewComponent implements OnInit {

  currIdx: number = 0;
  sources: any[] = sources;
  isoCode: string;
  
  constructor(
    private languageService: LanguageService
  ) {
    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      console.log(isoCode);
      this.isoCode = isoCode;
    })
  }

  ngOnInit() {
  }

  increaseIdx() {
    if (this.currIdx === this.sources.length - 1) {
      this.currIdx = 0;
    } else {
      this.currIdx += 1;
    }
  }

  decreaseIdx() {
    if (this.currIdx === 0) {
      this.currIdx = this.sources.length - 1;
    } else {
      this.currIdx -= 1;
    }
  }

}
