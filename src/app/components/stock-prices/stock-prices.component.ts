import { StockPricesService } from '../../services/stock-prices/stock-prices.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-stock-prices',
    templateUrl: './stock-prices.component.html',
    styleUrl: './stock-prices.component.scss',
    imports: [CommonModule]
})

export class StockPricesComponent implements OnInit {

  stockPriceObservable$ = this._stockPricesService.getStockPrices;

  constructor(
    private _stockPricesService: StockPricesService
  ) { }

  ngOnInit(): void {
    this._setupStockPricesPage();
  }

  private _setupStockPricesPage() {
    // this._stockPricesService.triggerMockStockPriceUpdatesThousandEventsPerSecond();
  }
}