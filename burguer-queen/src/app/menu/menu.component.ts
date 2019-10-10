import {Component, ViewChild} from '@angular/core';
import {OrdersService} from '../shared/orders.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import * as data from './data.json';
/**
 * @title Autosize sidenav
 */
export interface PeriodicElement {
  orderNumber: number;
  customerName: string;
  products:string;
  totalOrder:number;
}
@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  displayedColumns: string[] = ['orderNumber', 'customerName','actions'];
  dataSource= new MatTableDataSource ();
  constructor(private orderService: OrdersService){}
  showFiller = false;
  "products" = [
    {
      name: "Soberbia",
      pan:["Masa Madre", "Tradicional"],
      type:["Individual","Combo"],
      price:[50, 65],
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    },
    {
      name: "Malicia",
      pan:["Masa Madre", "Tradicional"],
      type:["Individual","Combo"],
      price:[50, 65],
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    },
    {
      name: "Gula",
      pan:["Masa Madre", "Tradicional"],
      type:["Individual","Combo"],
      price:[50, 65],
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    },
    {
      name: "Encarnación",
      pan:["Masa Madre", "Tradicional"],
      type:["Individual","Combo"],
      price:[50, 65],
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    }
  ];

  // Propiedades
  totalOrder = 0;
  // Array temporal
  tempOrder = [];
  OrdersService: any;



  @ViewChild(MatSort,{static: false}) sort: MatSort;


  ngOnInit(){
    //  llamando todas las órdenes
    let data2 = this.orderService.myForm.value.completed;
    this.getAllOrders();
    console.log(this.onChangeStatus(data2));
  }



  onAddProduct(product){
    console.log(product);
    // suma de todos los precios
    this.totalOrder = (this.totalOrder + product.price[0]);
    console.log(this.totalOrder )
    // Impresión de precio y producto en comanda
    this.tempOrder.push(product.name + " " + "$"+ product.price[0])
  }
  removeItemOrder =(order) =>{
    let index = this.tempOrder.indexOf(order);
    if (index > -1) this.tempOrder.splice(index, 1);
  }
  onSubmit(){
    console.log(this.orderService.myForm.value);
    // Agregando al array temporal el # de orden y el cliente
    this.orderService.myForm.value.order = this.tempOrder;
    let data = this.orderService.myForm.value;
    // let state = this.orderService.myForm.value;
    // console.log(data);
    data.totalOrder = this.totalOrder;
    // llamada al servicio
    this.orderService.createOrders(data);
    // limpiando el array
    this.tempOrder = [];
    // Reinicializando a 0 el total de la orden
    this.totalOrder=0;
    this.onChangeStatus(data);
    // Reinicializando el formulario
    this.orderService.myForm.reset();
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }
  getAllOrders(){
    this.orderService.getOrders().subscribe(res =>{
      this.dataSource.data = res;
    })
  }
  onDelete(id: string){
    this.orderService.deleteOrders(id);
  }
  onChangeStatus(order: any){
    console.log(order);
    
    order.completed = true;
    this.orderService.updateOrders(order);
    // console.log(this.orderService.updateOrders(order));
    
    console.log(order.completed);
    
  }

  prueba(value){
    console.log("VALUE:", value)
    console.log(data.default[value]);
    this.products = data.default[value]
    //console.log(this.products);
  }
}
