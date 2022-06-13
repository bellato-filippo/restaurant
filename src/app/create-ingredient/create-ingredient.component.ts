import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from '../models/ingredient.model';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css']
})
export class CreateIngredientComponent {

  // form
  form: FormGroup;
  
  //ingredients: Ingredient[] = [];


  //imports the necessary services
  constructor(public formBuilder: FormBuilder, public httpService: HttpService, public router: Router, public authService: AuthService) {
    /*
    this.httpService.getIngredients().subscribe(res => {
      this.ingredients = res;
    })
    */
    // creates the form inputs
    this.form = formBuilder.group({
      'name': ['', Validators.required],
      'expiryDate': ['', Validators.required]
    });
  }

  // POST the new ingredient through the http service
  send() {
    if(!this.form.valid){
      alert("Please fill all fields")
      return;
    }
    let name = this.form.controls['name'].value;
    let date = this.form.controls['expiryDate'].value;
    // the id is calculated autmatically
    this.httpService.postIngredient(new Ingredient(0, name, date));
    this.router.navigate(['/ingredients']);
  }

}
