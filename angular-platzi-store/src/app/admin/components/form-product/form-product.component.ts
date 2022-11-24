import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { finalize, Observable } from 'rxjs';

import { MyValidators } from 'src/app/utils/validators';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$?: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
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

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const fileList: FileList = target.files ?? new FileList();
    const file = fileList[0];
    const name = 'images';
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url => {
            this.form.get('image')?.setValue(url);
          })
        })
      )
      .subscribe();
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
