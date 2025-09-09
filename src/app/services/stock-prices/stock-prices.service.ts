import { BehaviorSubject, interval, Observable } from 'rxjs';
import { StockPrice } from '../../models/stock-prices';
import { Injectable, NgZone } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StockPricesService {

  private stockSubject = new BehaviorSubject<StockPrice>(this._createNewDefaultStockPrice());

  constructor(private ngZone: NgZone) {
    this.triggerStockPricesChanges();
  }

  triggerStockPricesChanges() {
    // Run interval outside Angular to avoid flooding change detection
    this.ngZone.runOutsideAngular(() => {
      interval(100).pipe(
        map(() => ({
          symbol: 'AAPL',
          price: parseFloat((150 + Math.random() * 10).toFixed(2)),
          timestamp: new Date()
        }))
      ).subscribe(stock => {
        // Emit inside Angular zone for UI updates
        this.ngZone.run(() => this.stockSubject.next(stock));
      });
    });
  }

  private _createNewDefaultStockPrice() {
    return new StockPrice({
      price: 0,
      symbol: 'AAPL',
      timestamp: new Date()
    });
  }

  getStockPrice(): Observable<StockPrice> {
    return this.stockSubject.asObservable();
  }
}