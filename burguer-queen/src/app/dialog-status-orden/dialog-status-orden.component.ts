import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../shared/orders.service';

@Component({
  selector: 'app-dialog-status-orden',
  templateUrl: './dialog-status-orden.component.html',
  styleUrls: ['./dialog-status-orden.component.css']
})
export class DialogStatusOrdenComponent{

  constructor(private orderService: OrdersService) { }

  totalOrder = 0;
  tempOrder = [];
  OrdersService: any;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  onAddProduct(product){
    console.log(product);
    // suma de todos los precios
    this.totalOrder = (this.totalOrder + product.price[0]);
    console.log(this.totalOrder );
    // Impresión de precio y producto en comanda
    // this.tempOrder.push(product.name + " " + "$"+ product.price[0])
  }

}
