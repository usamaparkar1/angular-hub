import { StockPricesRoute } from './routes/stock-prices-route';
import { AppRoutesEnum } from './routes/routes.enum';
import { loginRoute } from './routes/login.route';
import { Route, Routes } from '@angular/router';
import { FormRoute } from './routes/form-route';
import { TestRoute } from './test/test.route';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: AppRoutesEnum.FormRoute,
    },
    StockPricesRoute,
    loginRoute,
    TestRoute,
    FormRoute
];