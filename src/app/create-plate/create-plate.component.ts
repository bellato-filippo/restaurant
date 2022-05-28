import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plate } from '../models/plate.model';
import { AuthService } from '../services/auth.service';
import { PlateService } from '../services/plate.service';

@Component({
  selector: 'app-create-plate',
  templateUrl: './create-plate.component.html',
  styleUrls: ['./create-plate.component.css']
})
export class CreatePlateComponent {

  form: FormGroup;
  plates: Plate[] = [];

  constructor(public authService: AuthService, public formBuilder: FormBuilder, public plateService: PlateService, public router: Router) {
    this.plateService.currentPlate.subscribe(plates => this.plates = plates);
    this.form = formBuilder.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required]
    });
   }

   send() {
    if(!this.form.valid){
      alert("Please fill all fields")
      return;
    }
    let name = this.form.controls['name'].value;
    let price = this.form.controls['price'].value;
    console.log(name + " " + price);
    let max = 0;
    this.plates.forEach(element => {
      if (element.id > max) {
        max = element.id;
      }
    });
    max++;
    this.plates.push(new Plate(max, name, price, []));
    this.updatePlates();
    this.router.navigate(['/plate/' + max]);
   }

   updatePlates() {
    this.plateService.changeMessage(this.plates);
  }
}