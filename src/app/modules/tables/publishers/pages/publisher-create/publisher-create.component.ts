import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PublisherService } from 'src/app/_shared/components/services/publisher.service';

@Component({
  selector: 'app-publisher-create',
  templateUrl: './publisher-create.component.html',
  styleUrls: ['./publisher-create.component.scss']
})
export class PublisherCreateComponent implements OnInit {
  myForm!: FormGroup;
  id: any;
  constructor(
    private router: Router,
    protected route: ActivatedRoute,
    private fb: FormBuilder,
    private publisherService: PublisherService,
    private notification: NzNotificationService
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      country: [''],
    });
  }

  onSave() {
    this.publisherService.create(this.myForm.value).subscribe(() => {
      this.notification.success(
        'Thành công',
        'Thêm mới Nhà xuất bản thành công'
      );
      this.gotoList();
    })
  }

  onCancel() {
    this.gotoList();
  }

  gotoList() {
    this.router.navigate([`/publishers`]);
  }
}
