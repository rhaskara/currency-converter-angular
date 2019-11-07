import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CurrencyInputComponent } from './components/converter/currency-input/currency-input.component';
import { CurrencyInfoComponent } from './components/converter/currency-info/currency-info.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrencyAdderComponent } from './components/converter/currency-adder/currency-adder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyInputComponent,
    CurrencyInfoComponent,
    ConverterComponent,
    CurrencyAdderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
