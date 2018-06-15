import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-city-portrait-overview',
  templateUrl: './city-portrait-overview.component.html',
  styleUrls: ['./city-portrait-overview.component.scss']
})
export class CityPortraitOverviewComponent implements OnInit {

  cityGroupOverview: any[];
  constructor(
    private dataService: DataService
  ) {
    this.cityGroupOverview = this.dataService.getCityGroupOverview('de'); 
  }

  ngOnInit() {
  }

}
