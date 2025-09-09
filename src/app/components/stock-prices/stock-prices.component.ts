import { StockPricesService } from '../../services/stock-prices/stock-prices.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil, throttleTime } from 'rxjs';
import { StockPrice } from '../../models/stock-prices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-prices',
  templateUrl: './stock-prices.component.html',
  styleUrls: ['./stock-prices.component.scss'],
  imports: [CommonModule]
})

export class StockPricesComponent implements OnInit, OnDestroy {

  private _liveStockPricesSubject$: Subject<StockPrice | null> = new Subject<StockPrice | null>();
  private _previousPrice?: number;

  latestStockPrice?: StockPrice;

  constructor(
    private stockPricesService: StockPricesService
  ) { }

  ngOnInit(): void {
    this._setupStockPricesPage();
  }

  private _setupStockPricesPage() {
    this.stockPricesService.triggerStockPricesChanges();
    this._subscribeToStockPriceChangesEvent();
  }

  private _subscribeToStockPriceChangesEvent() {
    this.stockPricesService.getStockPrice()
    .pipe(
      takeUntil(this._liveStockPricesSubject$),
      throttleTime(500) // Limit UI updates to 2 per second
    )
    .subscribe((price: StockPrice) => {
      this._setCurrentPriceAsPreviousPriceBeforeUpdatingTheLatestPrice();
      this._setNewPriceFromStockPricesSubscriptionAsLatestPrice(price);
    });
  }

  private _setCurrentPriceAsPreviousPriceBeforeUpdatingTheLatestPrice() {
    this._previousPrice = this.latestStockPrice?.price;
  }

  private _setNewPriceFromStockPricesSubscriptionAsLatestPrice(latestStockPrice: StockPrice) {
    this.latestStockPrice = latestStockPrice;
  }

  priceChangeClass(): string {
    if (!this._previousPrice) return 'neutral';
    if (this.latestStockPrice!.price > this._previousPrice) return 'up';
    if (this.latestStockPrice!.price < this._previousPrice) return 'down';
    return 'neutral';
  }

  ngOnDestroy(): void {
    this._destroyStockPricesSubject();
  }

  private _destroyStockPricesSubject() {
    this._liveStockPricesSubject$.next(null);
    this._liveStockPricesSubject$.complete();
  }
}