import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { title } from 'process';
import { Publisher } from 'src/app/_shared/components/models/api.model';
import { PublisherService } from 'src/app/_shared/components/services/publisher.service';
import { ApiService } from '../../../_shared/components/services/api.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {
  constructor(
    protected router: Router,
    private publisherService: PublisherService,
    private notification: NzNotificationService
  ) { }

  items: Publisher[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.publisherService.getAll().subscribe((res: any) => {
      this.items = res;
    })
  }

  create() {
    this.router.navigate([`/publishers/create`]);
  }

  update(id: any) {
    this.router.navigate([`/publishers/${id}`]);
  }

  delete(id) {
    this.publisherService.delete(id).subscribe(
      (res) => {
      console.log(res);
      this.notification.success(
        'Thành công',
        'Xóa thành công'
      );
      this.getAll();
    },
    (err) => {
      console.log(err, 'abc');

    }
    );
  }

}
