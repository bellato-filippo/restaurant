import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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


  plate: Plate = new Plate();
  plateEdit: boolean;
  ingredients: Ingredient[] = [];
  //has: Has[] = [];
  plateIngredient: Ingredient[] = [];
  form: FormGroup;

  constructor(public formBuilder: FormBuilder, public route: ActivatedRoute, public httpService: HttpService, public authService: AuthService, public router: Router) {
    this.plateEdit = false;
    this.httpService.getIngredients().subscribe(res => {
      this.ingredients = res;
    });
    /*
    this.httpService.getHas().subscribe(res => {
      this.has = res;
    });
    */
    let id = this.route.snapshot.paramMap.get('id') ?? "0";
    this.httpService.getPlateById(id).subscribe(res => {
      this.plate = res;
    });

    this.httpService.getIngredientsByPlateId(id).subscribe(res => {
      this.plateIngredient = res;
    })

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

   edit() {
     this.plateEdit = !this.plateEdit;
    }

    addIngredient(plateId: number, ingredientId: number) {
      let found = false;
      this.plateIngredient.forEach(element => {
        if (element.id == ingredientId) {
          alert('Ingredient already exists');
          found = true;
          return;
        }
      });
      if (!found) { 
        this.httpService.postHas(new Has(plateId, ingredientId));
        //not very elegant. Does the job for now
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/plate/' + plateId]);
      });
      } else {
        return;
      }
    }

    removeIngredient(plateId: number, ingredientId: number) {
      this.httpService.deleteHas(plateId, ingredientId);
      this.router.navigateByUrl('/RefreshComponent', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/plate/' + plateId]);
      });
    }

    updateNamePrice() {
      let name = this.form.controls['name'].value;
      let price = this.form.controls['price'].value;
      if (name == "") {
        name = this.plate.name;
      }
      if (price == 0) {
        price = this.plate.price;
      }
      this.httpService.updatePlateNamePrice(this.plate.id + "", new Plate(this.plate.id, name, price));
      this.router.navigateByUrl('/RefreshComponent', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/plate/' + this.plate.id]);
      });
    }
}
