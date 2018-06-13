import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LanguageService } from '../services/language.service';

import { bioSelection } from '../vars/biographies-selection';

@Component({
  selector: 'app-biography-overview',
  templateUrl: './biography-overview.component.html',
  styleUrls: ['./biography-overview.component.scss']
})
export class BiographyOverviewComponent implements OnInit {

  persons: string[];
  isoCode: string;
  bioSelection: any[] = bioSelection;

  constructor(
    private languageService: LanguageService,
    private route: ActivatedRoute
  ) {

    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      this.isoCode = isoCode;
    });
    if (this.bioSelection.length === 1) {
      this.persons = this.bioSelection[0]["bios"];
    }
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('lang'));
  }

}
