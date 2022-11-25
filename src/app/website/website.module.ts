import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { ProduitComponent } from './components/produit/produit.component';
import { HttpClientJsonpModule } from "@angular/common/http";
import { GoogleMapsModule } from "@angular/google-maps";
import { MatRippleModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { AboutComponent } from './components/about/about.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    ProduitComponent,
    AboutComponent,
    LegalNoticeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatMenuModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    MatRippleModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
  ],
})
export class WebsiteModule {
}
