import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './../../html-service/layout/footer/footer.component';
import { HeaderComponent } from './../../html-service/layout/header/header.component';
import { LoaderComponent } from './../../html-service/layout/loader/loader.component';
import { RefreshComponent } from './../../html-service/layout/refresh/refresh.component';
import { NotifComponent } from './../../html-service/layout/notif/notif.component';

import { SvchomeComponent } from './../../html-service/page-service/svchome/svchome.component';

import { ModalbottomsheetComponent } from '../../html-service/modal/modal-template/modalbottomsheet/modalbottomsheet.component';
import { ModalfullsheetComponent } from '../../html-service/modal/modal-template/modalfullsheet/modalfullsheet.component';
import { SvcloginComponent } from 'src/app/html-service/page-service/svclogin/svclogin.component';
import { SvcregisterComponent } from 'src/app/html-service/page-service/svcregister/svcregister.component';
import { SvcbabytargetComponent } from 'src/app/html-service/page-service/svcbabytarget/svcbabytarget.component';
import { SvcbabyinformationComponent } from 'src/app/html-service/page-service/svcbabyinformation/svcbabyinformation.component';
import { SvcsettingsComponent } from 'src/app/html-service/page-service/svcsettings/svcsettings.component';
import { SvcchartbabyComponent } from 'src/app/html-service/page-service/svcchartbaby/svcchartbaby.component';
import { SvcbabyformComponent } from 'src/app/html-service/page-service/svcbabyform/svcbabyform.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    RefreshComponent,
    NotifComponent,

    SvchomeComponent,
    SvcloginComponent,
    SvcregisterComponent,
    SvcbabytargetComponent,
    SvcbabyinformationComponent,
    SvcsettingsComponent,
    SvcchartbabyComponent,
    SvcbabyformComponent,

    ModalbottomsheetComponent,
    ModalfullsheetComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FooterComponent,
    HeaderComponent,
    LoaderComponent,
    RefreshComponent,
    NotifComponent,

    SvchomeComponent,
    SvcloginComponent,
    SvcregisterComponent,
    SvcbabytargetComponent,
    SvcbabyinformationComponent,
    SvcsettingsComponent,
    SvcchartbabyComponent,
    SvcbabyformComponent,

    ModalbottomsheetComponent,
    ModalfullsheetComponent,

  ],
})
export class HtmlModule { }
