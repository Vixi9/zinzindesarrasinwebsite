import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { DiscoverComponent } from './discover/discover.component';
import { ContactComponent } from './contact/contact.component';
import { NewsPageComponent } from './news/news-page/news-page.component';
import { ShopPageComponent } from './shop/shop-page/shop-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopPageComponent},
  { path: 'account', component: AccountComponent},
  { path: 'news', component: NewsPageComponent},
  { path: 'discover', component: DiscoverComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
