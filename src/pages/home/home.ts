import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController,ToastController,NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { SigninPage } from '../signin/signin';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isexist: any;
   posts :any ;
   sharedpost:any;
  constructor(public navCtrl: NavController,
    public toast: ToastController, 
    public http: Http,public alertCtrl: AlertController,public navParams:NavParams)
     {
      let userId = this.navParams.get('userId')

    this.getposts();
  }
  logout(){
  
    this.showToast('Loged Out');
    this.navCtrl.push(SigninPage);
  }
  sharepost(sharedpost){
   this.showToast(sharedpost);
    this.getposts();
  }

  getposts(){
    this.http.get('../../assets/json/allposts.json' ).map(res => res.json()).subscribe(data => {
      this.posts = data;
      this.showToast('All are in json file');
             });
   }
   showToast(message){
    let toast = this.toast.create({
    message:message,
    duration: 3000
    });
    toast.present();
    }
  showAlert(message) {
    const alert = this.alertCtrl.create({
      title: message,
      subTitle: 'Respond',
      buttons: ['OK']
    });
    alert.present();
  }
}
