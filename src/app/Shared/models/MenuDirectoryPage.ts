import { MenuItem } from "./MenuItem";
import { Restaurant } from "./Restaurant";

export interface MenuDirectoryPage {
    menuItemList?: MenuItem[];
    restaurantListing?: Restaurant;
}