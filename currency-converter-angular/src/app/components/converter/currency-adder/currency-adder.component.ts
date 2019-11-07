import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Currency } from '../../../../app/models/currency';

@Component({
  selector: 'app-currency-adder',
  templateUrl: './currency-adder.component.html',
  styleUrls: ['./currency-adder.component.scss']
})
export class CurrencyAdderComponent {
  @Input() currencySelector: Currency[];
  @Output() setWatching: EventEmitter<any> = new EventEmitter();
  requestAdd: boolean = false; // Default flag of adding currency

  constructor() { }

  /**
   * Submit selected currency to be tracked
   * @method onSubmit
   * @param selection {any} - reference to HTML select option element
   * @return none
   */
  onSubmit(selection): void {
    // If a currency is selected, then emit value to parent
    if (selection.value) {
      // Return value is emitted via event emitter from child to parent
      this.setWatching.emit(selection.value);
      // Reset selection
      selection.value = undefined;
    }
    
    // Reset state
    this.requestAdd = !this.requestAdd;
  }
}
