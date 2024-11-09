import { Route } from "@angular/router";
import { AppComponent } from "./app.component";

export const appRoutes: Route[] = [
  {
    path: "",
    component: AppComponent,
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];
