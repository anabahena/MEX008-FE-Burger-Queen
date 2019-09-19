import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importar nuestros componentes
// import { HeaderComponent } from './header/header.component';
// import { PruebaComponent } from './prueba/prueba.component';
// import { LateralBarComponent} from './lateral-bar/lateral-bar.component';
import { TakeOrderComponent} from './take-order/take-order.component';
import { InitContainerComponent } from './init-container/init-container.component';
const routes: Routes = [
  //DEfinnir las rutas y los componentes a llamar
  {path:'' , component: InitContainerComponent },
  {path:'take-order' , component: TakeOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
