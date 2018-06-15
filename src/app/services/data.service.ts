import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { letters } from '../vars/letters';
import { biographies } from '../vars/biographies';
import { bioSelection } from '../vars/biographies-selection';
import { sources } from '../vars/sources';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  letters: any[] = letters;
  sources: any[] = sources;
  bioSelection: any[] = bioSelection;
  bioDict: any = {};

  constructor(
    private http: HttpClient
  ) {
    console.log("Loading");
    // this.http.get("./assets/letters.json")
    //   .subscribe((result) => {
    //     console.log("JSON returned");
    //     this.letterGroups = result;
    //   })
    biographies.forEach((biography) => {
      this.bioDict[biography["slug"]] = biography;
    });
  }

  hasSources() : boolean {
    console.log(this.sources);
    return this.sources.length > 0;
  }

  hasBiographies() :boolean {
    console.log(this.bioSelection);
    return this.bioSelection[0].length > 0;
  }

  getBioInfo(bioId: string) : any {
    return this.bioDict[bioId];
  }

  getLetterOverview(isoCode: string): any[] {
    let letterOverview: any[] = [];

    this.letters.forEach((letterGroup: any) => {
      console.log(letterGroup);
      if (isoCode === 'en' && letterGroup.has_en) {
        letterOverview.push({
          "slug": letterGroup["slug"],
          "name": letterGroup["name"][isoCode],
          "has_en": letterGroup["has_en"]
         });
      } else {
        letterOverview.push({
          "slug": letterGroup["slug"],
          "name": letterGroup["name"][isoCode],
          "has_en": letterGroup["has_en"]
        });
      }
    })
    console.log(letterOverview);
    return letterOverview;
  }

  letterGroupHasEn(letterGroupSlug: string) :boolean {
    let letterGroup = this.letters.find((letterGroupItem) => {
      return letterGroupItem.slug === letterGroupSlug;
    });
    console.log(letterGroup);
    return letterGroup.has_en;
  }

  getLettersForGroup(letterGroupSlug: string) {
    let letterGroup = this.letters.find((letterGroupItem) => {
      return letterGroupItem.slug === letterGroupSlug;
    });
    console.log(letterGroup);
    return letterGroup.letters;
    // this.letters.forEach((letterGroup: any) => {
    //   if (letterGroup.slug === letterGroupSlug) {
    //     console.log("FOUND IT!");
    //     console.log(letterGroup.letters);
    //     return letterGroup.letters;
    //   }
    // });
  }

  sayHi() {
    console.log("HI");
  }

}
