import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRatesResponse } from './exchange-rates-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private httpClient: HttpClient) { }

  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>(`https://v6.exchangerate-api.com/v6/42e16bc4d358ae7eaf932a92/latest/${base}`);
  }

}
