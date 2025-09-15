import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuDirectoryRoutingModule } from './menu-directory-routing.module';
import { MenuDirectoryComponent } from './components/menu-directory.component';


@NgModule({
  declarations: [
    MenuDirectoryComponent
  ],
  imports: [
    CommonModule,
    MenuDirectoryRoutingModule
  ]
})
export class MenuDirectoryModule { }
