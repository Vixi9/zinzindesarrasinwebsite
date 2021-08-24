import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { ContactComponent } from './website/contact/contact.component';
import { CommanderComponent } from './website/commander/commander.component';
import { FermeComponent } from './website/ferme/ferme.component';
import { AtoutsComponent } from './website/atouts/atouts.component';
import { PourquoiComponent } from './website/pourquoi/pourquoi.component';
import { ProduitComponent } from './website/produit/produit.component';
import { RecettesComponent } from './website/recettes/recettes.component'
import { ArticlesComponent } from './website/articles/articles.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'commander', component: CommanderComponent },
  { path: 'ferme', component: FermeComponent },
  { path: 'atouts', component: AtoutsComponent },
  { path: 'pourquoi', component: PourquoiComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'recettes', component: RecettesComponent },
  { path: 'articles', component: ArticlesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
