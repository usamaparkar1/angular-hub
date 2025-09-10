import { TestComponent } from "./component/test.component";
import { testResolver } from "./resolver/test.resolver";
import { Route } from "@angular/router";

export const TestRoute: Route = {
    path: 'test',
    pathMatch: 'full',
    component: TestComponent,
    resolve: {
        testData: testResolver
    }
};