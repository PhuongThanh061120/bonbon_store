import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PublisherService } from 'src/app/_shared/components/services/publisher.service';

@Component({
  selector: 'app-publisher-update',
  templateUrl: './publisher-update.component.html',
  styleUrls: ['./publisher-update.component.scss']
})
export class PublisherUpdateComponent implements OnInit {
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
    this.publisherService.findOne(this.id).subscribe(val => {
      this.myForm.patchValue(val);
    })
  }

  onSave() {
    this.publisherService.update(this.id, this.myForm.value).subscribe(() => {
      this.notification.success(
        'Thành công',
        'Cập nhật thành công'
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
