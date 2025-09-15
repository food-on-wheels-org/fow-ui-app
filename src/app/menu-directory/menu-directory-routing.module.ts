import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDirectoryComponent } from './components/menu-directory.component';

const routes: Routes = [
  { path: 'menu-directory/:id', component: MenuDirectoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuDirectoryRoutingModule { }
