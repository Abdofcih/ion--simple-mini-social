import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { AddStudentPage } from '../add-student/add-student';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  user:any = [];
  emailExist :any;
  passwordExist = 0;
 todo : FormGroup;
 email: any;
 password: any;
  constructor(public navCtrl: NavController,public http: Http,public toast: ToastController,private formBuilder: FormBuilder)
  {
   

    this.todo = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@+[a-zA-Z0-9-]+.com+$')
      ])),
      password : new FormControl ('',Validators.compose([
        Validators.minLength(6),
         Validators.required])),
    });
  }

  //.map(res => res.json())
  checkUser(Email,Password){
    if(Email=='abdo@gmail.com' && Password==1234567)
    {
     this.showToast('Sign in Successfuly ');
    this.navCtrl.push(TabsPage);
    
    }
      else
     {
       
       this.showToast('Eamil and password are not matched');
     }
   }
 signuppage(){
  this.navCtrl.push(AddStudentPage);
 }
 /*
 set(name){
  this.storage.set('name',name);
  this.showToast('updated');
}
get(){
  this.storage.get('name').then((val)=>{
    if(val)
    this.showToast(val);
    else
    this.showToast('Nothing')
  })
 
}
remove(){
  this.storage.remove('userEmail');
  this.showToast('Loged Out');
}*/
    
  showToast(message){
    let toast = this.toast.create({
    message:message,
    duration: 3000
    });
    toast.present();
    }

    testLen(input){

      if(input.legnth>=5) {

        this.showToast("good password"+ input.legnth);
      }
      else{
        this.showToast("sorry password is small"+ input.legnth);
      }
  }
}
