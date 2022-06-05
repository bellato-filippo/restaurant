import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateIngredientComponent } from './create-ingredient/create-ingredient.component';
import { CreatePlateComponent } from './create-plate/create-plate.component';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MenuComponent } from './menu/menu.component';
import { Page404Component } from './page404/page404.component';
import { PlateComponent } from './plate/plate.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'create-plate',
    component: CreatePlateComponent
  },
  {
    path: 'plate/:id',
    component: PlateComponent
  },
  {
    path: 'ingredients',
    component: IngredientsComponent
  },
  {
    path: 'create-ingredient',
    component: CreateIngredientComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
