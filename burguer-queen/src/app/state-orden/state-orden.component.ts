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
}

@Component({
  selector: 'app-state-orden',
  templateUrl: './state-orden.component.html',
  styleUrls: ['./state-orden.component.css']
})

export class StateOrdenComponent {
  private orderService: any;

  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogStatusOrdenComponent);
  }

  }
