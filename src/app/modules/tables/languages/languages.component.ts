import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from 'src/app/_shared/components/models/api.model';
import { ApiService } from 'src/app/_shared/components/services/api.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  constructor( protected router: Router, private service: ApiService) { }

  items: Language[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllLanguage().subscribe((res: any) => {
      this.items = res;
    })
  }

  clickCreate() {
    this.router.navigate([`/languages/create`]);
  }

  clickUpdate(item: any) {
    console.log(item.id);

    this.router.navigate([`/languages/${item.id}`]);
  }
}
