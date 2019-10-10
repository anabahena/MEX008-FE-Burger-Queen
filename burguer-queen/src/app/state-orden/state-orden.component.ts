import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogStatusOrdenComponent } from '../dialog-status-orden/dialog-status-orden.component';
import {OrdersService} from '../shared/orders.service';
import { MenuComponent } from '../menu/menu.component';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  totalOrder:number;



}

@Component({
  selector: 'app-state-orden',
  templateUrl: './state-orden.component.html',
  styleUrls: ['./state-orden.component.css']
})
export class StateOrdenComponent {
  constructor(public dialog: MatDialog, public orderService: OrdersService) {}
  openDialog() {
    this.dialog.open(DialogStatusOrdenComponent);
  }

  }
