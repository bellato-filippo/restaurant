import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { Page404Component } from './page404/page404.component';
import { PlateComponent } from './plate/plate.component';
import { CreateIngredientComponent } from './create-ingredient/create-ingredient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePlateComponent } from './create-plate/create-plate.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    IngredientsComponent,
    Page404Component,
    PlateComponent,
    CreateIngredientComponent,
    CreatePlateComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
