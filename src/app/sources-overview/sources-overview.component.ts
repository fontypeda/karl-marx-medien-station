import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../services/language.service';

import { sources } from '../vars/sources';

declare var OpenSeadragon;

@Component({
  selector: 'app-sources-overview',
  templateUrl: './sources-overview.component.html',
  styleUrls: ['./sources-overview.component.scss']
})
export class SourcesOverviewComponent implements OnInit {

  currIdx: number = 0;
  sources: any[] = sources;
  isoCode: string;
  viewer: any;
  // panning value to be multiplied
  // by zoom for panning in all directions
  panBaseVal: number = 10;
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
    this.viewer = OpenSeadragon({
      id: "osd_viewport",
      prefixUrl: "node_modules/openseadragon/build/openseadragon/images/",
      tileSources: "./assets/archive/osd/page2.xml",
      showNavigationControl: false
    });
    // {
    //   "scrollToZoom": false,
    //   "clickToZoom": false,
    //   "dblClickToZoom": false,
//   "pinchToZoom": true,
//   "flickEnabled": true,
//   "flickMinSpeed": 120,
//   "flickMomentum": 0.25,
//   "pinchRotate": false
// }
    // BrightSign players will break anyway after some secs, so disable zoom
    this.viewer.gestureSettingsTouch.dblClickToZoom = false;
    this.viewer.gestureSettingsTouch.pinchToZoom = false;
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

  public zoomIn() {
    let maxZoom: number = this.viewer.viewport.getMaxZoom();
    let currZoom: number = this.viewer.viewport.getZoom();
    console.log(maxZoom);
    console.log(currZoom);
    if (currZoom * 2 > maxZoom) {
      let zoomByVal = maxZoom / currZoom;
      this.viewer.viewport.zoomBy(zoomByVal)
    } else {
      this.viewer.viewport.zoomBy(2.0);
    }
  }

  public zoomOut() {
    let minZoom: number = this.viewer.viewport.getMinZoom();
    let currZoom: number = this.viewer.viewport.getZoom();
    console.log(minZoom);
    console.log(currZoom);
    if (currZoom / 2 < minZoom) {
      let zoomByVal = minZoom / currZoom;
      this.viewer.viewport.zoomBy(zoomByVal)
    } else {
      this.viewer.viewport.zoomBy(0.5);
    }
  }


  public panLeft() {
    let currCenter = this.viewer.viewport.getCenter();
    if (currCenter.x - 0.1 < 0.0) {
      currCenter.x = 0.0;
    } else {
      currCenter.x -= 0.1;
    }

    this.viewer.viewport.panTo(currCenter);
  }

  public panRight() {
    let currCenter = this.viewer.viewport.getCenter();
    if (currCenter.x + 0.1 > 1.0) {
      currCenter.x = 1.0;
    } else {
      currCenter.x += 0.1;
    }
    this.viewer.viewport.panTo(currCenter);
  }

  public panUp() {
    let currCenter = this.viewer.viewport.getCenter();
    if (currCenter.y - 0.1 < 0.0) {
      currCenter.y = 0.0;
    } else {
      currCenter.y -= 0.1;
    }
    this.viewer.viewport.panTo(currCenter);
  }

  public panDown() {
    let currZoom: number = this.viewer.viewport.getZoom();
    let currCenter = this.viewer.viewport.getCenter();
    console.log(currCenter);
    if (currCenter.y + 0.1 > 0.75) {
      currCenter.y = 0.75;
    } else {
      currCenter.y += 0.1;
    }
    this.viewer.viewport.panTo(currCenter);
  }
}
