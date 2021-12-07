import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from 'src/app/utils/validators';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {}

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.create(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['admin', 'products']);
      });
    }
  }

  private buildForm() {
    return this.formBuilder.group({
      id: ['', [Validators.required]],
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
