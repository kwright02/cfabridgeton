import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
  path: "", component: MainComponent
},{
  path: "menu", component: MenuComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
