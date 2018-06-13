import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-baloon-selector',
  templateUrl: './baloon-selector.component.html',
  styleUrls: ['./baloon-selector.component.scss']
})
export class BaloonSelectorComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  link: string;

  constructor() { }

  ngOnInit() {

  }

}
