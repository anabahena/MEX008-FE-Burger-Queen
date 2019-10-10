import {Component, ViewChild} from '@angular/core';
import {OrdersService} from '../shared/orders.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

/**
 * @title Autosize sidenav
 */
export interface PeriodicElement {
  orderNumber: number;
  customerName: string;
  products: string;
  totalOrder: number;
}
@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  displayedColumns: string[] = ['orderNumber', 'customerName', 'actions'];
  dataSource = new MatTableDataSource ();
  private order: any;
    constructor(private orderService: OrdersService) {}
  showFiller = false;
  'products' = [
    {
      name: 'Soberbia',
      img: 'https://github.com/anabahena/MEX008-FE-Burger-Queen/blob/master/burguer-queen/src/assets/soberbia.png?raw=true',
      pan: ['Masa Madre', 'Tradicional'],
      type: ['Individual', 'Combo'],
      price: [50, 65],
      ingredientes: ['Con todo', 'Sin'],
      Especificaciones: []
    },
    {
      name: 'Malicia',
      img: 'https://github.com/anabahena/MEX008-FE-Burger-Queen/blob/master/burguer-queen/src/assets/malicia.png?raw=true',
      pan: ['Masa Madre', 'Tradicional'],
      type: ['Individual', 'Combo'],
      price: [50, 65],
      ingredientes: ['Con todo', 'Sin'],
      Especificaciones: []
    },
    {
      name: 'Encarnación',
      img: 'https://github.com/anabahena/MEX008-FE-Burger-Queen/blob/master/burguer-queen/src/assets/encarnacion.png?raw=true',
      pan: ['Masa Madre', 'Tradicional'],
      type: ['Individual', 'Combo'],
      price: [50, 65],
      ingredientes: ['Con todo', 'Sin'],
      Especificaciones: []
    },
    {
      name: 'Gula',
      img: 'https://github.com/anabahena/MEX008-FE-Burger-Queen/blob/master/burguer-queen/src/assets/gula.png?raw=true',
      pan: ['Masa Madre', 'Tradicional'],
      type: ['Individual', 'Combo'],
      price: [50, 65],
      ingredientes: ['Con todo', 'Sin'],
      Especificaciones: []
    }
  ];
  totalOrder = 0;
  // Array temporal
  tempOrder = [];
  OrdersService: any;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    //  llamando todas las órdenes
    this.getAllOrders();
  }
  onAddProduct(product) {
    console.log(product);
    // suma de todos los precios
    this.totalOrder = (this.totalOrder + product.price[0]);
    console.log(this.totalOrder );
    // Impresión de precio y producto en comanda
    this.tempOrder.push(product.name + ' ' + '$' + product.price[0]);
  }
  removeItemOrder = (order) => {
    const index = this.tempOrder.indexOf(order);
    if (index > -1) { this.tempOrder.splice(index, 1); }
  }
  onSubmit() {
    console.log(this.orderService.myForm.value);
    // Agregando al array temporal el # de orden y el cliente
    this.orderService.myForm.value.order = this.tempOrder;
    const data = this.orderService.myForm.value;
    // console.log(data);
    data.totalOrder = this.totalOrder;
    // llamada al servicio
    this.orderService.createOrders(data);
    // limpiando el array
    this.tempOrder = [];
    // Reinicializando a 0 el total de la orden
    this.totalOrder = 0;
    // Reinicializando el formulario
    this.orderService.myForm.reset();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  getAllOrders() {
    this.orderService.getOrders().subscribe(res => {
      this.dataSource.data = res;
    });
  }
  onDelete(id: string) {
    this.orderService.deleteOrders(id);
  }

}
