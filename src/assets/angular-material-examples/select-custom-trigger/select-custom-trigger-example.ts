import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with custom trigger text */
@Component({
  selector: 'select-custom-trigger-example',
  templateUrl: 'select-custom-trigger-example.html',
  styleUrls: ['select-custom-trigger-example.css'],
})
export class SelectCustomTriggerExample {
  toppings = new FormControl();

  toppingList: string[] = ['English Litrature', 'Advance Maths', 'Advance Science', 'Advance Accounting'];
}
