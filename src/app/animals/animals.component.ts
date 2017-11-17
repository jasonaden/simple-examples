import { Component, OnInit } from '@angular/core';
import { AnimalsService } from './animals.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent implements OnInit {

  animals: any;
  image: string;

  constructor(public animalsService: AnimalsService) { }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals() {
    this.animalsService.getBreeds()
      // .subscribe(animals => this.animals = JSON.stringify(animals, null, 2));
      .subscribe(animals => this.animals = animals);
  }

  getImage(animal: string) {
    this.animalsService.getImage(animal)
      .subscribe(img => this.image = img);
  }

}
