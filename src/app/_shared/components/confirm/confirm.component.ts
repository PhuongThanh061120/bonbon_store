import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  constructor(private modalRef: NzModalRef, protected router: Router) {}

  ngOnInit() {}
  handleCancel(): void {
    this.modalRef.destroy();
    this.router.navigate([`/home`]);
  }
}
