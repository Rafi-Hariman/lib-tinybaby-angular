import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartBabyPageRoutingModule } from './chart-baby-routing.module';

import { ChartBabyPage } from './chart-baby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartBabyPageRoutingModule
  ],
  declarations: [ChartBabyPage]
})
export class ChartBabyPageModule {}