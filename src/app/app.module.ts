import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PanierComponent } from './components/panier/panier.component';
import { RgpdComponent } from './components/rgpd/rgpd.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PanierComponent,
    RgpdComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
