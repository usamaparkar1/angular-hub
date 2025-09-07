import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPricesComponent } from './stock-prices.component';

describe('StockPricesComponent', () => {
  let stockPricesComponent: StockPricesComponent;
  let stockPricesFixture: ComponentFixture<StockPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockPricesComponent]
    })
    .compileComponents();
    
    stockPricesFixture = TestBed.createComponent(StockPricesComponent);
    stockPricesComponent = stockPricesFixture.componentInstance;
    stockPricesFixture.detectChanges();
  });

  it('should create', () => {
    expect(stockPricesComponent).toBeTruthy();
  });
});