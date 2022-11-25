import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
import { WebsiteModule } from './website/website.module'
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    WebsiteModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
