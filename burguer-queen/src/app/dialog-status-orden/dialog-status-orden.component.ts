import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../shared/orders.service';
import { Observable, from} from 'rxjs';

@Component({
  selector: 'app-dialog-status-orden',
  templateUrl: './dialog-status-orden.component.html',
  styleUrls: ['./dialog-status-orden.component.css']
})



export class DialogStatusOrdenComponent implements OnInit{

  public product: number;
  public order: any;


  constructor(public orderService: OrdersService) {}

  ngOnInit() {
    this.order()
    
  }

  public perrito(){
    this.order = (this.orderService.getOrders());
  }

}

