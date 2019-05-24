import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../../pages/signin/signin';
import { TabsPage } from '../../pages/tabs/tabs';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
name:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toast: ToastController) {

  }

  ionViewDidLoad() {
   
  }


  nextPage(){
  this.navCtrl.push(SigninPage);
}
showToast(message){
  let toast = this.toast.create({
  message:message,
  duration: 3000
  });
  toast.present();
  }

}
