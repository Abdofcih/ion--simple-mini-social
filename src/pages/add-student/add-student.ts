import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {SigninPage} from '..//signin/signin';
import { Http } from '@angular/http';
@IonicPage()
@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {
 /* userRef : Observable<any[]>*/
  //user:any = {userName:"",userPhone: "", userEmail:"",userPassword:""};
  user:any ={};
 todo : FormGroup;
  constructor(public navCtrl: NavController,public navParams: NavParams,public toast: ToastController,public http: Http)
  {
    this.todo = new FormGroup({

      name : new FormControl ('',Validators.compose([
        Validators.minLength(2),
         Validators.required])),

         phone : new FormControl ('',Validators.compose([
           Validators.minLength(11),
            Validators.required])),

      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@+[a-zA-Z0-9-]+.com+$')
      ])),

      password : new FormControl ('',Validators.compose([
        Validators.minLength(6),
         Validators.required])),
         passwordc : new FormControl ('',Validators.compose([
          Validators.minLength(6),
           Validators.required])),
    });
  }

  signinPage(){
    this.navCtrl.push(SigninPage);
  }
   opdone:any;
 addUser(){
  this.showToast('No database, Design only');
  
 }

  showToast(message){
  let toast = this.toast.create({
  message:message,
  duration: 3000
  });
  toast.present();

  }



}
