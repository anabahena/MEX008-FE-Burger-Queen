import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../shared/orders.service';
import { Observable, from} from 'rxjs';
import {MenuComponent} from '../menu/menu.component'

@Component({
  selector: 'app-dialog-status-orden',
  templateUrl: './dialog-status-orden.component.html',
  styleUrls: ['./dialog-status-orden.component.css']
})



export class DialogStatusOrdenComponent implements OnInit{

  // public product: number;
  public totalOrder: number;


  constructor(public orderService: OrdersService) {
    this.totalOrder =  this.orderService.myForm.value.totalOrder;
    console.log(this.totalOrder);
    
  }

  ngOnInit() {
    this.statusOrder(this.totalOrder)
    
  }

  public statusOrder(totalOrder: any){
    this.orderService.myForm.value
  }

}
