import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LanguageService } from 'src/app/_shared/components/services/language.service';

@Component({
  selector: 'app-language-update',
  templateUrl: './language-update.component.html',
  styleUrls: ['./language-update.component.scss']
})
export class LanguageUpdateComponent implements OnInit {

  myForm!: FormGroup;
  id: any;
  constructor(
    private router: Router,
    protected route: ActivatedRoute,
    private fb: FormBuilder,
    private languageService: LanguageService,
    private notification: NzNotificationService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
    });
    this.languageService.findOne(this.id).subscribe(val => {
      this.myForm.patchValue(val);
    })
  }

  onSave() {
    this.languageService.update(this.id, this.myForm.value).subscribe(() => {
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
    this.router.navigate([`/languages`]);
  }

}
