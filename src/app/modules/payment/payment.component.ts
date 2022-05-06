import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { from } from 'rxjs';
import { ConfirmComponent } from 'src/app/_shared/components/confirm/confirm.component';
import { CartService } from 'src/app/_shared/components/services/cart.service';
import { OrderService } from 'src/app/_shared/components/services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modal: NzModalService,
    private orderService: OrderService,
    private cartService: CartService
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      address: ['', [Validators.required]],
      email: [''],
      city: [''],
      commune: [''],
      district: [''],
    });
  }

  createModal(): void {
    this.modal.create({
      nzTitle: 'Xác nhận đơn hàng',
      nzContent: ConfirmComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
      nzWidth: '500px',
    });
  }

  order(): void {
    const products = this.cartService.getProduct();
    const body = { ...this.myForm.value, products };
    console.log(body);
    // clear sản phẩm trong localstorage sau khi order thành công
    this.orderService.order(body).subscribe(res => {
      this.cartService.clearProduct();
      this.createModal();
    })
  }
}
