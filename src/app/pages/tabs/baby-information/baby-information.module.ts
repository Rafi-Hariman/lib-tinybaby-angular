import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BabyInformationPageRoutingModule } from './baby-information-routing.module';

import { BabyInformationPage } from './baby-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BabyInformationPageRoutingModule
  ],
  declarations: [BabyInformationPage]
})
export class BabyInformationPageModule {}
