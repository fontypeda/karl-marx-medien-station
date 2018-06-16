import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { letters } from '../vars/letters';
import { biographies } from '../vars/biographies';
import { bioSelection } from '../vars/biographies-selection';
import { sources } from '../vars/sources';
import { cities } from '../vars/city-portrait';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  letters: any[] = letters;
  sources: any[] = sources;
  cities: any[] = cities;
  biographies: any[] = biographies;

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
    this.biographies.forEach((biography) => {
      this.bioDict[biography["slug"]] = biography;
    });
  }

  hasSources() : boolean {
    console.log(this.sources);
    return this.sources.length > 0;
  }

  hasBiographies() :boolean {
    console.log(this.bioSelection);
    return this.bioSelection[0].bios.length > 0;
  }

  hasEnglishLetters() :boolean {
    let hasLetters: boolean = false;
    this.letters.forEach((letterGroup: any) => {
      console.log(letterGroup);
      if (letterGroup.has_en) {
        hasLetters = true;
      }
    });
    return hasLetters;
  }

  getBioInfo(bioId: string) : any {
    return this.bioDict[bioId];
  }

  getBioGroupOverview(isoCode: string) : any[] {
    let bioGroupOverview: any[] = [];
    this.bioSelection.forEach((bioGroup: any) => {
      console.log(bioGroup);
      bioGroupOverview.push({
        "name": bioGroup.city_name,
        "slug": bioGroup.city_slug
      });

    });
    console.log(bioGroupOverview);
    return bioGroupOverview;
  }

  getBioGroupForSlug(bioSlug: string) :string {
    console.log(bioSlug);
    let bioGroupOverview: any[] = [];
    let bioGroupString: string;
    this.bioSelection.forEach((bioGroup: any) => {
      console.log(bioGroup);
      console.log(bioGroup.bios);
      console.log(bioGroup.city_slug);
      let matchedBiography = bioGroup.bios.find((biography: any) => {
        // console.log(biography.slug);
        return biography.slug === bioSlug;
      });
      console.log(matchedBiography);
      if (matchedBiography !== undefined) {
        bioGroupString = bioGroup.city_slug;
        return;
      }
    });
    return bioGroupString;
  }

  getCityGroupOverview(isoCode: string): any[] {
    let cityGroupOverview: any[] = [];
    this.cities.forEach((city: any) => {
      console.log(city);
      cityGroupOverview.push({
        "name": city.name,
        "slug": city.slug
      });
    })
    return cityGroupOverview;
  }

  getCityInfo(citySlug): any {
    let city = this.cities.find((city: any) => {
      return city.slug === citySlug;
    });
    return city;
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

  public personHasLetters(bioId: string):boolean {
    let result = this.letters.find((letterGroup) => {
      return letterGroup.slug === bioId;
    });
    console.log(result);
    if (result === undefined) {
      return false;
    } else {
      return true;
    }
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

  public getPersonsForGroup(bioGroupSlug: string) : any[] {
    let bioGroup = this.bioSelection.find((bioGroup: any) => {
      return bioGroup.city_slug === bioGroupSlug;
    });
    console.log(bioGroup);
    return bioGroup.bios;

  }

  sayHi() {
    console.log("HI");
  }

}
