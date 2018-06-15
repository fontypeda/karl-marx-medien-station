import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';

import { BiographyOverviewComponent } from './biography-overview/biography-overview.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { LettersOverviewComponent } from './letters-overview/letters-overview.component';
import { CityPortraitComponent } from './city-portrait/city-portrait.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { SourcesOverviewComponent } from './sources-overview/sources-overview.component';
import { LettersDisplayComponent } from './letters-display/letters-display.component';
import { BaloonSelectorComponent } from './baloon-selector/baloon-selector.component';
import { MissingTranslationComponent } from './missing-translation/missing-translation.component';
import { CityPortraitOverviewComponent } from './city-portrait-overview/city-portrait-overview.component';
import { BiographyGroupOverviewComponent } from './biography-group-overview/biography-group-overview.component';
import { TranscriptionDialogComponent } from './transcription-dialog/transcription-dialog.component';
// import { MissingTranslationDialogComponent } from './missing-translation-dialog/missing-translation-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    BiographyOverviewComponent,
    HomeViewComponent,
    LettersOverviewComponent,
    CityPortraitComponent,
    PersonDetailComponent,
    SourcesOverviewComponent,
    LettersDisplayComponent,
    BaloonSelectorComponent,
    MissingTranslationComponent,
    CityPortraitOverviewComponent,
    BiographyGroupOverviewComponent,
    TranscriptionDialogComponent,
    // MissingTranslationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    NgxPageScrollModule,
    BrowserAnimationsModule,

  ],
  providers: [
    DataService
  ],
  entryComponents: [
    TranscriptionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
