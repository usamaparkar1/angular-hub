export class StockPrice implements IStockPrice {
    price: number;

    constructor (stockPrice: IStockPrice) {
        this.price = stockPrice.price;
    }
}

interface IStockPrice {
    price: number;
}