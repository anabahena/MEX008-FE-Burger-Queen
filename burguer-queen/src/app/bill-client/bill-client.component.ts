import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalDialogBillComponent } from '../modal-dialog-bill/modal-dialog-bill.component';
import {OrdersService} from '../shared/orders.service';

@Component({
  selector: 'app-bill-client',
  templateUrl: './bill-client.component.html',
  styleUrls: ['./bill-client.component.css']
})
export class BillClientComponent implements OnInit {


  cash :number
  favoriteSeason: string;
  pays: string[] = ['Cuenta Completa', 'Dividir por persona', 'Dividir equitativamente'];
  percentages: string[]=['10%', '15%','Otro'];
  public totalOrder: number;

  constructor(public dialog: MatDialog, public orderService: OrdersService) {
    this.totalOrder =  this.orderService.myForm.value.totalOrder;
    console.log(this.totalOrder);
  }

  ngOnInit(){
    this.totalprice((this.totalOrder))
  }

  public totalprice(totalOrder: any){
    this.orderService.myForm.value
    
  }

  openDialog() {
    this.dialog.open(ModalDialogBillComponent, {  
      
    });
  }

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.cash = result;
    // });
 
}

