import { TestComponent } from './test/component/test.component';
import { LoginComponent } from './pages/login/login.component';
import { testResolver } from './test/resolver/test.resolver';
import { Route, Routes } from '@angular/router';

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
    TestRoute
];