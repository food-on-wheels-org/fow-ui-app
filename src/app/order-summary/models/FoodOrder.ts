import { MenuItem } from 'src/app/Shared/models/MenuItem';
import { Restaurant } from 'src/app/Shared/models/Restaurant';

export interface FoodOrder {
    menuItemList?: MenuItem[];
    userId?: number;
    restaurant?: Restaurant;
}