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
}
