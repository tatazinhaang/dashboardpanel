import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';

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
    this.productList.push(this.productForm.value);
    this.closeModal('addProductModal');
  }

  index:any
  openModal(modalId:any, index:any) {
    if(modalId == 'updateProductModal') {
      this.productForm = new FormGroup ({
      productId: new FormControl(this.productList[index].productId),
      productName: new FormControl(this.productList[index].productName),
      productQuantity: new FormControl(this.productList[index].productQuantity),
      productPrice: new FormControl(this.productList[index].productPrice),
    })

    }
    this.index=index;
    const modalElement:any = document.getElementById(modalId);
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  closeModal(modalId:any) {
    const modalElement:any = document.getElementById(modalId);
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }
  }

  delete() {
    this.productList.splice(this.index, 1);
    this.closeModal('deleteModal');
  }

  update() {
    this.productList[this.index].productId = this.productForm.value.productId;
    this.productList[this.index].productIName = this.productForm.value.productName;
    this.productList[this.index].productQuantity = this.productForm.value.productQuantity;
    this.productList[this.index].productPrice = this.productForm.value.productPrice;
  }

}
