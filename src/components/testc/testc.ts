import { Component } from '@angular/core';

/**
 * Generated class for the TestcComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'testc',
  templateUrl: 'testc.html'
})
export class TestcComponent {

  text: string;

  constructor() {
    console.log('Hello TestcComponent Component');
    this.text = 'Hello World';
  }

}
