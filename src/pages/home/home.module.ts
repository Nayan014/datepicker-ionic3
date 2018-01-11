import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { DatePickerModule } from 'datepicker-ionic2';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    DatePickerModule
  ],
})
export class HomePageModule {}
