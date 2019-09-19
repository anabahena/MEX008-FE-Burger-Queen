import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
// Módulo de animación
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PruebaComponent} from './prueba/prueba.component';
// Módulo de grid
import {MatGridListModule} from '@angular/material/grid-list';
// Modulo de FlexLayout
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {LateralBarComponent} from './lateral-bar/lateral-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
//Componentes que contienen la pagina de las mesas-barras y la comanda respectivamente
import { InitContainerComponent } from './init-container/init-container.component';
import { TakeOrderComponent } from './take-order/take-order.component';



@NgModule({
  exports:[MatGridListModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    PruebaComponent,
    LateralBarComponent,
    InitContainerComponent,
    TakeOrderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
