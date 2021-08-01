import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    NewsComponent
  ]
})
export class WebsiteModule { }
