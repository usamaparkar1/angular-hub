import { StockPrice } from '../../models/stock-prices';
import { interval, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StockPricesService {

  private _stockPriceStream$: Observable<StockPrice> = new Observable<StockPrice>();

  constructor() {}

  triggerMockStockPriceUpdatesThousandEventsPerSecond() {
    this._stockPriceStream$ = interval(1).pipe(map(i => ({ price: 100 + i })));
  }

  get getStockPrices(): Observable<StockPrice> {
    return this._stockPriceStream$;
  }
}