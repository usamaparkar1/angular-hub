import { TestComponent } from './test/component/test.component';
import { StockPricesRoute } from './routes/stock-prices-route';
import { LoginComponent } from './pages/login/login.component';
import { testResolver } from './test/resolver/test.resolver';
import { Route, Routes } from '@angular/router';
import { FormRoute } from './routes/form-route';

export const loginRoute: Route = {
    path: 'login',
    component: LoginComponent
};

export const TestRoute: Route = {
    path: 'test',
    pathMatch: 'full',
    component: TestComponent,
    resolve: {
        testData: testResolver
    }
};

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'test',
    },
    loginRoute,
    StockPricesRoute,
    TestRoute,
    FormRoute
];