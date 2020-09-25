import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { BottomButtonsComponent } from './bottom-buttons/bottom-buttons.component';
import { YVideoComponent } from './y-video/y-video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiscService } from './services/misc.service';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { GViewerComponent } from './g-viewer/g-viewer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MsViewerComponent } from './ms-viewer/ms-viewer.component';
// pdf
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    ImageViewerComponent,
    BottomButtonsComponent,
    YVideoComponent,
    GViewerComponent,
    MsViewerComponent,
    PdfViewerComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule,
    PdfViewerModule,
  ],
  providers: [
    MiscService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
