import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { FoodOrder } from '../models/FoodOrder';
import { MenuItem } from 'src/app/Shared/models/MenuItem';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  orderSummaryObj: any;
  orderSummary: FoodOrder;
  total?: any;
  isOrderPlaced: boolean = false;

  constructor(private activRoute: ActivatedRoute, private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    const data = this.activRoute.snapshot.queryParams['data'];
    this.orderSummaryObj = JSON.parse(data);
    this.orderSummaryObj.userId = 1; // Hardcoded userId for now
    this.orderSummary = this.orderSummaryObj;
    console.log('Order Summary:', this.orderSummary);

    this.total = (this.orderSummaryObj.menuItemList as MenuItem[]).reduce((accumulator, currentValue) => accumulator + (currentValue.price! * currentValue.quantity!), 0);
  }

  saveOrder() {
    this.orderService.saveOrder(this.orderSummaryObj).subscribe(
      response => {
        this.isOrderPlaced = true;
        console.log('Order saved successfully:', response);
      },
      error => {
        console.error('Error saving order:', error);
      }
    );
  }

  closeDialog() {
    this.router.navigate(['/']);
  }

}
