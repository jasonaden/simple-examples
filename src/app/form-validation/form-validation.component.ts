import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

  constructor() { }


  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  clearForm() {
    this.model = new Hero(null, null, null);
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  skyDog(): Hero {
    let myHero = new Hero(42, 'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

}

