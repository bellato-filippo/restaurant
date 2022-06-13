import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plate } from '../models/plate.model';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-create-plate',
  templateUrl: './create-plate.component.html',
  styleUrls: ['./create-plate.component.css']
})
export class CreatePlateComponent {

  // form
  form: FormGroup;

  // imports the necessary services
  constructor(public authService: AuthService, public formBuilder: FormBuilder, public httpService: HttpService, public router: Router) {
    // specifies the form inputs
    this.form = formBuilder.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required]
    });
   }

   // POST the new plate to the database through the http service
   send() {
    // checks that the form is valid
    if(!this.form.valid){
      alert("Please fill all fields")
      return;
    }
    let name = this.form.controls['name'].value;
    let price = this.form.controls['price'].value;
    // the id is calculated automatically
    this.httpService.postPlate(new Plate(0, name, price));
    this.router.navigate(['/menu']);
   }
}