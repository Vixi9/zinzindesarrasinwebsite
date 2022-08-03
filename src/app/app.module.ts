import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {WebsiteModule} from './website/website.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientJsonpModule,
    WebsiteModule,
    BrowserAnimationsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
