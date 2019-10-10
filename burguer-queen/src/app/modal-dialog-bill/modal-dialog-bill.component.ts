import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../shared/orders.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-dialog-bill',
  templateUrl: './modal-dialog-bill.component.html',
  styleUrls: ['./modal-dialog-bill.component.css']
})
export class ModalDialogBillComponent implements OnInit {
  public totalOrder: number;
  public pagaCon:number;
  public completed:boolean;

  constructor(public orderService: OrdersService) { 
    this.totalOrder =  this.orderService.myForm.value.totalOrder;
    console.log(this.totalOrder);
  }

  myForm2 = new FormGroup({
  pagaCon: new FormControl(''),
  completed: new FormControl(false),
  
});



  ngOnInit() {
    this.totalprice((this.totalOrder))
  }

  public totalprice(totalOrder: any){
    this.orderService.myForm.value
  }


  changeStatus(order: any){
    // console.log(order);
    
    this.completed= false;
    this.orderService.updateOrders(order);
    // console.log(this.orderService.updateOrders(order));
    
    console.log(order.completed);
    
  }

  // cambio(){
  //   console.log(this.orderService.myForm2.value);
  //   let data = this.orderService.myForm2.value;

  // }

}
