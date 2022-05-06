import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Language } from 'src/app/_shared/components/models/api.model';
import { ApiService } from 'src/app/_shared/components/services/api.service';
import { LanguageService } from 'src/app/_shared/components/services/language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  constructor( protected router: Router, private languageService: LanguageService,
    private notification: NzNotificationService) { }

  items: Language[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.languageService.getAll().subscribe((res: any) => {
      this.items = res;
    })
  }

  clickCreate() {
    this.router.navigate([`/languages/create`]);
  }

  clickUpdate(id: any) {
    this.router.navigate([`/languages/${id}`]);
  }

  delete(id) {
    this.languageService.delete(id).subscribe(() => {
      this.notification.success(
        'Thành công',
        'Xóa thành công'
      );
    })
  }
}
