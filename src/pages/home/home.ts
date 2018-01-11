import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DatePicker } from '@ionic-native/date-picker';

import { DatePickerModule } from 'datepicker-ionic2';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  localDate: any;
  ionicDate: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private datePicker: DatePicker) {
      this.localDate = new Date();
  }

  datepickerIonic(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.ionicDate = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  setDate(event){
    console.log(event);
    this.localDate = event;
  }
}
