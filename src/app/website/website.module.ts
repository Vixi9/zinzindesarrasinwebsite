import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './navigation/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
import { CommanderComponent } from './commander/commander.component';
import { MatMenuModule } from '@angular/material/menu';
import { FermeComponent } from './ferme/ferme.component';
import { AtoutsComponent } from './atouts/atouts.component';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
import { FacebookModule } from 'ngx-facebook';
import { ProduitComponent } from './produit/produit.component';
import { RecettesComponent } from './recettes/recettes.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    CommanderComponent,
    FermeComponent,
    AtoutsComponent,
    PourquoiComponent,
    ProduitComponent,
    RecettesComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatMenuModule,
    GoogleMapsModule,
    FacebookModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
  ]
})
export class WebsiteModule { }
