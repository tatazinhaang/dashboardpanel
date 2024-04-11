import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  productForm!:FormGroup;


  ngOnInit():void {

    this.setForm();
  }

  setForm() {
    this.productForm = new FormGroup ({
      productId: new FormControl(''),
      productName: new FormControl(''),
      productQuantity: new FormControl(''),
      productPrice: new FormControl(''),
    })
  }

  productList:any=[];
  submit() {
    console.log(this.productForm.value);

    this.productList.push(this.productForm.value);

    console.log("Product List: ", this.productList);
  }
}
