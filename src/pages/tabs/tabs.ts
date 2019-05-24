import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = ContactPage;

  constructor(public navParams:NavParams) {
let userId= this.navParams.get('userId')
  }
  
}
