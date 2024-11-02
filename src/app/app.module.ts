import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideHttpClient, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http'
import { WebsiteModule } from './website/website.module'
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        WebsiteModule,
        BrowserAnimationsModule,
        MatSidenavModule], providers: [provideHttpClient(withInterceptorsFromDi(), withJsonpSupport())] })
export class AppModule {
}
