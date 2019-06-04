import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicplayyerComponent } from './musicplayyer/musicplayyer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { IconComponent } from './general/icon/icon.component';
import { IconButtonComponent } from './general/icon-button/icon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicplayyerComponent,
    HomepageComponent,
    SlideshowComponent,
    IconComponent,
    IconButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
