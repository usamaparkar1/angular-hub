import { StockPricesService } from './stock-prices.service';
import { TestBed } from '@angular/core/testing';

describe('StockPricesService', () => {
  let stockPricesService: StockPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    stockPricesService = TestBed.inject(StockPricesService);
  });

  it('should be created', () => {
    expect(stockPricesService).toBeTruthy();
  });
});