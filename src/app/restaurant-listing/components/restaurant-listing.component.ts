import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/Shared/models/Restaurant';
import { RestaurantListingService } from '../service/restaurantListing.service';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent {
  public restaurantList: Restaurant[] = [];

  ngOnInit() {
    this.getAllRestaurants();
  }

  constructor(private router: Router, private restaurantListingService: RestaurantListingService) { }

  getAllRestaurants() {
    this.restaurantListingService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
        console.log('Restaurants fetched successfully:', this.restaurantList);
      }
    );
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  getRandomImage(): string {
    const imageCount = 10; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.png`; // Replace with your image filename pattern
  }

  onButtonClick(id: number|undefined) {
    this.router.navigate(['/menu-directory', id]);
  }

}
