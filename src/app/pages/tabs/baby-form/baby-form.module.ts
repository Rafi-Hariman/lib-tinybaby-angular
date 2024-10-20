import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BabyFormPageRoutingModule } from './baby-form-routing.module';

import { BabyFormPage } from './baby-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BabyFormPageRoutingModule
  ],
  declarations: [BabyFormPage]
})
export class BabyFormPageModule {}
