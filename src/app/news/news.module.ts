import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    NewsPageComponent,
    NewsEventComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class NewsModule { }
