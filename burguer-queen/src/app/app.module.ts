
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
// Módulo de animación
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PruebaComponent} from './prueba/prueba.component';
// Modulo de FlexLayout
import {FlexLayoutModule} from '@angular/flex-layout';
import {LateralBarComponent} from './lateral-bar/lateral-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
// Componentes que contienen la pagina de las mesas-barras y la comanda respectivamente
import { InitContainerComponent } from './init-container/init-container.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { BillComponent } from './bill/bill.component';
import { BillClientComponent } from './bill-client/bill-client.component';
import { MenuComponent} from './menu/menu.component';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { BarTotalComponent } from './bar-total/bar-total.component';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
// import { OrderListComponent } from './order-list/order-list.component';
// import { OrdersComponent } from './orders/orders.component';
import { ModalDialogBillComponent } from './modal-dialog-bill/modal-dialog-bill.component';

// Yael
import { MatDialogModule, MatBadgeModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { StateOrdenComponent } from './state-orden/state-orden.component';
import { DialogStatusOrdenComponent } from './dialog-status-orden/dialog-status-orden.component';
import { OrdenPayComponent } from './orden-pay/orden-pay.component';
// import {BarTotalComponent} from './bar-total/bar-total.component';
import { ConfirmDialogComponent } from './lateral-bar/confirm-dialog/confirm-dialog.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UserService } from './user.service';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
// import { MenuModalComponent } from './menu/menu-modal/menu-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { ModalTableOrdenComponent } from './modal-table-orden/modal-table-orden.component';
// import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase/app';
import { MatTableModule } from '@angular/material';
import { ModalHamburgerSoberbiaComponent } from './modal-hamburger-soberbia/modal-hamburger-soberbia.component';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    HeaderComponent,
    PruebaComponent,
    LateralBarComponent,
    InitContainerComponent,
    TakeOrderComponent,
    BillComponent,
    BillClientComponent,
    // BarTotalComponent,
    MenuComponent,
    ModalDialogBillComponent,
    StateOrdenComponent,
    DialogStatusOrdenComponent,

    OrdenPayComponent,
    // OrdersComponent,
    ConfirmDialogComponent,
    // MenuModalComponent
    ConfirmDialogComponent,
    TimerComponent,
    ModalTableOrdenComponent,
    ModalHamburgerSoberbiaComponent,
  ],
  // Yael
  entryComponents: [DialogStatusOrdenComponent,
                    ModalDialogBillComponent,
                    ConfirmDialogComponent,
                    ModalTableOrdenComponent,
                    ModalHamburgerSoberbiaComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatTableModule,

    // Yael
    MatBadgeModule,
    DragDropModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatFormFieldModule,
    MatBadgeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
