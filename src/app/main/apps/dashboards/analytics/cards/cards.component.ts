import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = ['English Litrature', 'Advance Maths', 'Advance Science', 'Advance Accounting'];

  constructor() { }

  ngOnInit() {
  }

}
