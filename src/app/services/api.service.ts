import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private rootUrl = 'https://api.exchangerate.host/latest?base=USD';

  getTheLatestCurrencyValues() {
    const response = this.http.get(this.rootUrl);
    return response;
  }

  constructor(
    private http: HttpClient
  ) { }
}
