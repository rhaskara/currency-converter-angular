import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

const apiUrl = "https://api.exchangeratesapi.io/api/latest";

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  /* Subject to store base number input by user and send value changes to converter component */
  private baseNumber: Subject<any> = new Subject(); 

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get currency conversion rates from exchangeratesapi.io
   * @method getRates
   * @param base {string} - base currency ID (hard coded to USD)
   * @return {Observable} subscription response from server
   */
  getRates(base: string): Observable<any> {
    return this.http.get(apiUrl + "?base=" + base);
  }

  /**
   * Send user input as subject value update
   * @method sendUserInput
   * @param number {number} - base currency number input from user
   * @return none
   */
  sendUserInput(number: number): void {
    this.baseNumber.next(number);
  }

  /**
   * Observe user input to detect changes in value
   * @method getUserInput
   * @return {Observable} subscription to user input for base number
   */
  getUserInput(): Observable<any> {
    return this.baseNumber.asObservable();
  }
}
