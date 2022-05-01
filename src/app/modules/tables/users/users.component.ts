import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserChangeStatusComponent } from './pages/user-change-status/user-change-status.component';
import { ApiService } from '../../../_shared/components/services/api.service';
import { User } from 'src/app/_shared/components/models/api.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(protected router: Router, private modal: NzModalService, private service: ApiService) { }

  items: User[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllUser().subscribe((res: any) => {
      this.items = res;
    })
  }

  clickChange() {
    this.modal.create({
      nzTitle: 'Thay đổi trạng thái',
      nzContent: UserChangeStatusComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
      nzWidth: '500',
    });
  }

  clickUpdate(item: any) {
    console.log(item.id);

    this.router.navigate([`/users/${item.id}`]);
  }

}
