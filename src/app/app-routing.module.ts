import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { NewsComponent } from './website/news/news.component';
import { ShopComponent } from './website/shop/shop.component';
import { ContactComponent } from './website/contact/contact.component';
import { OrderComponent } from './website/order/order.component';
import { FermeComponent } from './website/ferme/ferme.component';
import { AtoutsComponent } from './website/atouts/atouts.component';
import { PourquoiComponent } from './website/pourquoi/pourquoi.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'actualites', component: NewsComponent },
  { path: 'boutique', component: ShopComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'commander', component: OrderComponent },
  { path: 'ferme', component: FermeComponent },
  { path: 'atouts', component: AtoutsComponent },
  { path: 'pourquoi', component: PourquoiComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
