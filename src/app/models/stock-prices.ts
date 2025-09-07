export class StockPrice implements IStockPrice {
    price: number;
    symbol: string;
    timestamp: Date;

    constructor (stockPrice: IStockPrice) {
        this.price = stockPrice.price;
        this.symbol = stockPrice.symbol;
        this.timestamp = stockPrice.timestamp;
    }
}

interface IStockPrice {
    price: number;
    symbol: string;
    timestamp: Date;
};