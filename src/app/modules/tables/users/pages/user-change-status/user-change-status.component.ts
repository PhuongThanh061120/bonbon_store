import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-change-status',
  templateUrl: './user-change-status.component.html',
  styleUrls: ['./user-change-status.component.scss']
})
export class UserChangeStatusComponent implements OnInit {

  constructor(private modalRef: NzModalRef) { }

  ngOnInit() {
  }

  handleCancel(): void {
    this.modalRef.destroy();
  }

  handleSave(): void {
    this.modalRef.destroy();
  }

}
