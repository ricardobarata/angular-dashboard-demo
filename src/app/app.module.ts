import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers } from "src/app/core/store/reducers";
import { environment } from "src/environments/environment";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false
      }
    }),
    StoreDevtoolsModule.instrument({
      name: "Store DevTools",
      logOnly: environment.production,
      maxAge: 20
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
