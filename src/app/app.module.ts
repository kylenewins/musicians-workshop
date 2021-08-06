import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RockShopComponent } from './rock-shop/rock-shop.component';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ReverbComponent } from './reverb/reverb.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'

import {IvyCarouselModule} from 'angular-responsive-carousel';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    RockShopComponent,
    HomeComponent,
    LessonsComponent,
    ReverbComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    IvyCarouselModule,
    FontAwesomeModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
