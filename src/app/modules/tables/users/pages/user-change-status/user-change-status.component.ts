import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { UserService } from '../../../../../_shared/components/services/user.service';

@Component({
  selector: 'app-user-change-status',
  templateUrl: './user-change-status.component.html',
  styleUrls: ['./user-change-status.component.scss'],
})
export class UserChangeStatusComponent implements OnInit {
  id: any;

  constructor(private modalRef: NzModalRef, protected route: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

  }

  handleCancel(): void {
    this.modalRef.destroy();
  }

  handleSave(): void {
    this.userService.change(this.id, null).subscribe(() => {});
    this.modalRef.destroy();
    this.router.navigate([`/users`]);
  }
}
