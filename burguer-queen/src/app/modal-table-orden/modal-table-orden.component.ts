import { Component, OnInit,ViewChild } from '@angular/core';
import {OrdersService} from '../shared/orders.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  orderNumber: number;
  customerName: string;
  // products:string;
}

@Component({
  selector: 'app-modal-table-orden',
  templateUrl: './modal-table-orden.component.html',
  styleUrls: ['./modal-table-orden.component.css']
})
export class ModalTableOrdenComponent implements OnInit {
  displayedColumns: string[] = ['orderNumber', 'customerName','actions'];
  dataSource= new MatTableDataSource ();
  constructor(public orderService: OrdersService) { }
  ngOnInit() {
  }
  totalOrder = 0;
  // Array temporal
  tempOrder = []; 
  OrdersService: any;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  onSubmit(){
    console.log(this.orderService.myForm.value);
    // Agregando al array temporal el # de orden y el cliente
    this.orderService.myForm.value.order = this.tempOrder;
    let data = this.orderService.myForm.value;
    // console.log(data);
    data.totalOrder = this.totalOrder;
    // llamada al servicio
    this.orderService.createOrders(data);
    // limpiando el array
    this.tempOrder = [];
    // Reinicializando a 0 el total de la orden
    this.totalOrder=0;
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
  
  onDelete(id:string){
    this.orderService.deleteOrders(id);
  }
  onChangeStatus(order:any){
    order.completed = true;
    this.orderService.updateOrders(order);
  }
}
