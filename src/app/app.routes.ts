import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

export const appRoutes: Routes = [
  { path: "dashboard", component: LayoutComponent },
  {
    path: "**",
    redirectTo: "/dashboard"
  }
];
