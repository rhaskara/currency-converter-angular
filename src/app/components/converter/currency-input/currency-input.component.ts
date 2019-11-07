import { Component } from '@angular/core';
import { ConverterService } from '../../../../app/service/converter.service';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss']
})
export class CurrencyInputComponent {
  userInput: number; // Store user input value
  defaultCurrency: any = {
    id: "USD",
    name: "United States Dollar"
  }

  constructor(
    private converterService: ConverterService
  ) { }
  
  /**
   * Accept input value and process it to the service
   * @method acceptValue
   * @return none
   */
  acceptValue():void {
    this.converterService.sendUserInput(this.userInput);
  }
}
