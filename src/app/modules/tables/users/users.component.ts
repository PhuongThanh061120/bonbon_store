import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserChangeStatusComponent } from './pages/user-change-status/user-change-status.component';
import { ApiService } from '../../../_shared/components/services/api.service';
import { User } from 'src/app/_shared/components/models/api.model';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from '../../../_shared/components/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    protected router: Router,
    private modal: NzModalService,
    private service: ApiService,
    private userService: UserService,
    private notification: NzNotificationService
  ) {}

  items: User[] = [];
  userFindOne: any;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe((res: any) => {
      this.items = res;
    });
  }

  clickChange(id: any) {
    console.log(id);

    this.userService.change(id, null).subscribe(() => {
      this.getAll();
    })
  }

  clickUpdate(id: any) {
    console.log(id);
    this.router.navigate([`/users/${id}`]);
  }


}
