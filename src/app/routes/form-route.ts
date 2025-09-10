
import { FormComponent } from "../components/form/form.component";
import { AppRoutesEnum } from "./routes.enum";
import { Route } from "@angular/router";

export const FormRoute: Route = {
    pathMatch: 'full',
    path: AppRoutesEnum.FormRoute,
    component: FormComponent
};