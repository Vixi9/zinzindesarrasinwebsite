import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { ProduitComponent } from './components/produit/produit.component';
import { provideHttpClient, withJsonpSupport } from "@angular/common/http";
import { GoogleMapsModule } from "@angular/google-maps";
import { MatRippleModule } from "@angular/material/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyListModule as MatListModule } from "@angular/material/legacy-list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { AboutComponent } from './components/about/about.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';

@NgModule({ declarations: [
        HeaderComponent,
        SidenavListComponent,
        HomeComponent,
        ContactComponent,
        FooterComponent,
        ProduitComponent,
        AboutComponent,
        LegalNoticeComponent,
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        SidenavListComponent,
        HomeComponent,
    ], imports: [CommonModule,
        RouterModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatMenuModule,
        GoogleMapsModule,
        MatRippleModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule], providers: [provideHttpClient(withJsonpSupport())] })
export class WebsiteModule {
}
