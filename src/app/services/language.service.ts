import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  isoCode: string = 'de';
  private languageChangeSource = new Subject<string>();
  public languageChange$ = this.languageChangeSource.asObservable();

  constructor() {

  }

  setIsoCode(isoCode) {
    this.isoCode = isoCode;
    this.languageChangeSource.next(isoCode); 
  }

  getIsoCode() {
    return this.isoCode;
  }

}
