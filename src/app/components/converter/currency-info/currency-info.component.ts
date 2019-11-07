import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.scss']
})
export class CurrencyInfoComponent {
  @Input() currency: Currency;
  @Output() eventOutput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  /**
   * Fire event to signal parent component that 
   * this currency should be removed from watchlist
   * @method removeWatch
   * @return none
   */
  removeWatch(): void {
    this.eventOutput.emit();
  }
}
