import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-exchanges';

  currencies: any = {};

  convertCurrencyFrom: string = "USD";
  convertCurrencyTo: string = "COP";

  currencyFromRate: number = 1;
  currencyToRate: number = 0;

  currenciesList: any = [];


  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getTheLatestCurrencyValues().subscribe((data: any) => {
      this.currencies = data.rates;
      this.formatCurrenvyValues();
      this.buildCurrenciesList();
      this.assignTheConvertCurrencyValue();
    });
  }

  assignTheConvertCurrencyValue() {
    this.currencyToRate = this.currencies[this.convertCurrencyTo];
  }

  formatCurrenvyValues() {
    for (let value in this.currencies){
      this.currencies[value] = this.currencies[value].toFixed(2);
    }
  }

  buildCurrenciesList() {
    this.currenciesList = Object.keys(this.currencies);
  }

}
