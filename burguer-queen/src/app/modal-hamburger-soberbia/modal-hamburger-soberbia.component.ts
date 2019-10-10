import { Component, OnInit } from '@angular/core';
import {MenuComponent} from '../menu/menu.component'
import {OrdersService} from '../shared/orders.service'

@Component({
  selector: 'app-modal-hamburger-soberbia',
  templateUrl: './modal-hamburger-soberbia.component.html',
  styleUrls: ['./modal-hamburger-soberbia.component.css']
})
export class ModalHamburgerSoberbiaComponent implements OnInit {
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
  }

 



  }