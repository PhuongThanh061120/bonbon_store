import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { from } from 'rxjs';
import { ConfirmComponent } from 'src/app/_shared/components/confirm/confirm.component';
import { PaymentMethod } from '../payment/payment-method';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  paymentMethod = PaymentMethod;
  radioValue: any;
  discountValue: any;
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private modal: NzModalService) {
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

  showModal(): void {
    this.createModal();
  }
}
