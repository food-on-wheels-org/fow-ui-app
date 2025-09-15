import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemService } from '../service/menuItem.service';
import { MenuDirectoryPage } from 'src/app/Shared/models/MenuDirectoryPage';
import { MenuItem } from 'src/app/Shared/models/MenuItem';

@Component({
  selector: 'app-menu-directory',
  templateUrl: './menu-directory.component.html',
  styleUrls: ['./menu-directory.component.css']
})
export class MenuDirectoryComponent {

  restaurantId: number;
  menuItemResponse: MenuDirectoryPage;
  itemCart: MenuItem[] = [];
  orderSummary: MenuDirectoryPage;

  constructor(private activatedRoute: ActivatedRoute, private menuItemService: MenuItemService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.restaurantId = +idParam;
      }
    });
    this.getMenuItemsByRestaurant(this.restaurantId);
  }

  getMenuItemsByRestaurant(id: number) {
    this.menuItemService.getMenuItemsByRestaurant(id).subscribe(
      data => {
        this.menuItemResponse = data;
        console.log('Menu items fetched successfully:', this.menuItemResponse);
      })
  }
  
  increment(menuItem: any) {
    menuItem.quantity++;
    const index = this.itemCart.findIndex(item => item.id === menuItem.id);
    if(index === -1) {
      this.itemCart.push(menuItem);
    }
  }

  decrement(menuItem: any) {
    const index = this.itemCart.findIndex(item => item.id === menuItem.id);
    if(menuItem.quantity > 0) {
      menuItem.quantity--;
    }
    if(this.itemCart[index].quantity == 0) {
      this.itemCart.splice(index, 1);
    } else {
      this.itemCart[index] = menuItem;
    }
  }

  onCheckOut() {
    this.itemCart;
    this.orderSummary = {
      menuItemList: [],
      restaurantListing: undefined
    }
    this.orderSummary.menuItemList = this.itemCart;
    this.orderSummary.restaurantListing = this.menuItemResponse.restaurantListing;
    this.router.navigate(['/orderSummary'], {queryParams: {data: JSON.stringify(this.orderSummary)}});
  }
}
