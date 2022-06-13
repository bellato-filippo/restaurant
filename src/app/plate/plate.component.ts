import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Has } from '../models/has.model';
import { Ingredient } from '../models/ingredient.model';
import { Plate } from '../models/plate.model';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent {

  // the current plate
  plate: Plate = new Plate();
  // boolean variable to allow the edit of a plate
  plateEdit: boolean;
  // list of all available ingredients
  ingredients: Ingredient[] = [];
  // list of the plate's ingredient
  plateIngredient: Ingredient[] = [];

  // tried with async pipe(not working) and with async promise(not working)
  //obsPlateIngredient: Observable<Ingredient[]> = new Observable<Ingredient[]>();
  // form
  form: FormGroup;

  constructor(public formBuilder: FormBuilder, public route: ActivatedRoute, public httpService: HttpService, public authService: AuthService, public router: Router) {
    this.plateEdit = false;
    // gets the ingredients list(all)
    this.httpService.getIngredients().subscribe(res => {
      this.ingredients = res;
    });

    /*
    this.httpService.getHas().subscribe(res => {
      this.has = res;
    });
    */
    // gets the id of the plate from the URL
    let id = this.route.snapshot.paramMap.get('id') ?? "0";
    // gets the plate
    this.httpService.getPlateById(id).subscribe(res => {
      this.plate = res;
    });

    // gets all the plate's ingredients
    this.httpService.getIngredientsByPlateId(id).subscribe(res => {
      this.plateIngredient = res;
    })
    

    //this.obsPlateIngredient = this.httpService.getIngredientsByPlateId(id);
    /*
    let indexes: number[] = [];
    this.has.forEach(element => {
      if (element.plate == this.plate.id) {
        indexes.push(element.ingredient);
      }
    });
    */

    this.form = formBuilder.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required]
    })
   }

   // allows to edit the plate's ingredients
   edit() {
     this.plateEdit = !this.plateEdit;
    }

    // adds an ingredient to the list
    addIngredient(plateId: number, ingredientId: number) {
      let found = false;
      // if the ingredient is already there sends an alert
      this.plateIngredient.forEach(element => {
        if (element.id == ingredientId) {
          alert('Ingredient already exists');
          found = true;
          return;
        }
      });
      if (!found) { 
        // adds the ingredient to the plate's list
        this.httpService.postHas(new Has(plateId, ingredientId));
        //not very elegant. Does the job
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/plate/' + plateId]);
      });
      } else {
        return;
      }
    }

    // removes the ingredient from the list
    removeIngredient(plateId: number, ingredientId: number) {
      this.httpService.deleteHas(plateId, ingredientId);
      this.router.navigateByUrl('/RefreshComponent', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/plate/' + plateId]);
      });
    }

    // updates the plate number and price
    updateNamePrice() {
      let name = this.form.controls['name'].value;
      let price = this.form.controls['price'].value;
      // if name is empty leaves the name as it is
      if (name == "") {
        name = this.plate.name;
      }
      // if price is empty leaves the price as it is
      if (price == 0) {
        price = this.plate.price;
      }
      // put the changes
      this.httpService.updatePlateNamePrice(this.plate.id + "", new Plate(this.plate.id, name, price));
      this.router.navigateByUrl('/RefreshComponent', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/plate/' + this.plate.id]);
      });
    }
}
