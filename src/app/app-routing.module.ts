import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/components/home/home.component';
import { ContactComponent } from './website/components/contact/contact.component';
import { ProduitComponent } from './website/components/produit/produit.component';
import { AboutComponent } from "./website/components/about/about.component";
import { LegalNoticeComponent } from "./website/components/legal-notice/legal-notice.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'produits', component: ProduitComponent },
  { path: 'mentions-legales', component: LegalNoticeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
