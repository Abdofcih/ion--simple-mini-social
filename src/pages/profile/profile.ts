import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
user:any = {};
getId:any;
  constructor(public navCtrl: NavController,public http:Http) {
    this.getuserdata(1)
}
getuserdata(id){
this.http.get('../../assets/json/profile.json').map(res =>res.json()).subscribe(data => {
  this.user = data;
  console.log(this.user);
  
});
}
  }
 

