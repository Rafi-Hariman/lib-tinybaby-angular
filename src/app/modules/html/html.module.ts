import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './../../html-service/layout/footer/footer.component';
import { HeaderComponent } from './../../html-service/layout/header/header.component';
import { LoaderComponent } from './../../html-service/layout/loader/loader.component';
import { RefreshComponent } from './../../html-service/layout/refresh/refresh.component';
import { NotifComponent } from './../../html-service/layout/notif/notif.component';
import { SvchomeComponent } from './../../html-service/page-service/svchome/svchome.component';
import { PopoverbabyinfoComponent } from '../../html-service/layout/popoverbabyinfo/popoverbabyinfo.component';

import { ModalbottomsheetComponent } from '../../html-service/modal/modal-template/modalbottomsheet/modalbottomsheet.component';
import { ModalfullsheetComponent } from '../../html-service/modal/modal-template/modalfullsheet/modalfullsheet.component';
import { SvcloginComponent } from '../../html-service/page-service/svclogin/svclogin.component';
import { SvcregisterComponent } from '../../html-service/page-service/svcregister/svcregister.component';
import { SvcbabytargetComponent } from '../../html-service/page-service/svcbabytarget/svcbabytarget.component';
import { SvcbabyinformationComponent } from '../../html-service/page-service/svcbabyinformation/svcbabyinformation.component';
import { SvcsettingsComponent } from '../../html-service/page-service/svcsettings/svcsettings.component';
import { SvcchartbabyComponent } from '../../html-service/page-service/svcchartbaby/svcchartbaby.component';
import { SvcbabyformComponent } from '../../html-service/page-service/svcbabyform/svcbabyform.component';
import { FormPageComponent } from '../../html-service/section/form-page/form-page.component';
import { Modal3monthComponent } from '../../html-service/modal/modal3month/modal3month.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ProfileDetailComponent } from '../../html-service/section/profile-detail/profile-detail.component';
import { ModalheaderprofiledetailComponent } from '../../html-service/modal/modal-template/modalheaderprofiledetail/modalheaderprofiledetail.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    RefreshComponent,
    NotifComponent,
    PopoverbabyinfoComponent,

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
    FormPageComponent,
    Modal3monthComponent,
    ProfileDetailComponent,
    ModalheaderprofiledetailComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [FooterComponent,
    HeaderComponent,
    LoaderComponent,
    RefreshComponent,
    NotifComponent,
    PopoverbabyinfoComponent,

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
    FormPageComponent,

    Modal3monthComponent,
    ProfileDetailComponent,
    ModalheaderprofiledetailComponent
  ],
})
export class HtmlModule { }
