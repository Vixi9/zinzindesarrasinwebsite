import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShopService } from './shop.service';

@NgModule({
  declarations: [
    ShopPageComponent,
    ShopItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [
    ShopService
  ]
})
export class ShopModule { }
