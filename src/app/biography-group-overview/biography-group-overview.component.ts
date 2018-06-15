import { Component, OnInit } from '@angular/core';


import { DataService } from '../services/data.service';

@Component({
  selector: 'app-biography-group-overview',
  templateUrl: './biography-group-overview.component.html',
  styleUrls: ['./biography-group-overview.component.scss']
})
export class BiographyGroupOverviewComponent implements OnInit {

  bioGroupOverview: any[];
  colNum: number = 5;

  constructor(
    private dataService: DataService
  ) {
    this.bioGroupOverview = this.dataService.getBioGroupOverview('de');
  }

  ngOnInit() {
    if (this.bioGroupOverview.length < this.colNum) {
      this.colNum = this.bioGroupOverview.length;
    }
  }

}
