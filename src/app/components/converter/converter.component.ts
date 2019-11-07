import { Component, OnInit, OnDestroy } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { ConverterService } from 'src/app/service/converter.service';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

const currencyNames = require("src/config/currency");

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit, OnDestroy {
  // Store latest/today's currency rates
  rates: Currency[] = [];
  // Store currency watchlist
  watchList: Currency[] = [];
  // Subscription to api response
  converterRequest: Subscription;
  // Subscription for base number input from user
  baseNumberSubscription: Subscription;
  // base number for conversion (initialized to 10)
  base: number = 10;
  // base currency to convert from (hard coded to USD)
  baseCurrency: string = "USD";

  constructor(
    private converterService: ConverterService
  ) {
    // Subscribe to user input. Input changes are debounced to minimize change detection by view
    this.baseNumberSubscription = this.converterService.getUserInput()
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((number: number) => {
      this.base = number;
      this.updateValues();
    });
  }

  ngOnInit() {
    // Initialization of currency rates
    this.converterRequest = this.converterService.getRates(this.baseCurrency)
    .subscribe((res) => {
      for (let rate in res["rates"]) {
        this.rates.push({
          id: rate,
          name: currencyNames[rate],
          rate: res["rates"][rate],
          value: res["rates"][rate] * this.base,
          watching: false
        });
      }
    });
  }

  ngOnDestroy() {
    // Remove subscription upon destroying component
    this.converterRequest.unsubscribe();
    this.baseNumberSubscription.unsubscribe();
  }

  /**
   * Update exchange rate values
   * @method updateValues
   * @return none
   */
  private updateValues(): void {
    for (let curr in this.rates) {
      this.rates[curr]["value"] = this.rates[curr]["rate"] * this.base;
    }
  }

  /**
   * Set selected currency to watch list
   * @method addToWatchList
   * @param index {number} - numbered index of selected currency
   * @return none
   */
  addToWatchList(index: number): void {
    this.rates[index].watching = true;
    this.watchList.push(this.rates[index]);
  }

  /**
   * Remove selected country from watch list and set watching flag to false
   * @method removeFromWatchList
   * @param id {string} - ID of removed currency
   * @return none
   */
  removeFromWatchList(id: string): void {
    // Filter selected element from watchlist
    this.watchList = this.watchList.filter((element) => {
      return element.id != id
    });

    // Find index of element in rates
    let rateIndex = this.rates.findIndex((e) => {
      return e.id == id;
    });

    // Set watching to false so user can see element again in dropdown option
    this.rates[rateIndex].watching = false;
  }
}