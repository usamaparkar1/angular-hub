import { StockPricesComponent } from "../components/stock-prices/stock-prices.component";
import { AppRoutesEnum } from "./routes.enum";
import { Route } from "@angular/router";

export const StockPricesRoute: Route = {
    pathMatch: 'full',
    path: AppRoutesEnum.StockPrices,
    component: StockPricesComponent
};