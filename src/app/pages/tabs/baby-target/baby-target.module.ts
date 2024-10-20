import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BabyTargetPageRoutingModule } from './baby-target-routing.module';

import { BabyTargetPage } from './baby-target.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BabyTargetPageRoutingModule
  ],
  declarations: [BabyTargetPage]
})
export class BabyTargetPageModule {}
