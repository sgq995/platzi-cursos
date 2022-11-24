import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from 'src/app/utils/validators';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.buildForm();
    this.id = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.productsService.find(this.id).subscribe((product) => {
        this.form.patchValue(product);
      });
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.update(this.id, product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['admin', 'products']);
      });
    }
  }

  private buildForm() {
    return this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isValidPrice]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get price() {
    return this.form.get('price');
  }
}
