import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  radioValue = 'A';

  myForm: FormGroup;

  options = [
    {
      link: '/comic',
      title: 'Truyện tranh'
    },
    {
      link: '/english',
      title: 'Sách tiếng anh'
    },
    {
      link: '/novel',
      title: 'Tiểu thuyết'
    }
  ]

  constructor(private fb: FormBuilder, private service: ApiService) {
    this.myForm = this.fb.group({
          keyword: [''],
          categoryId: [null],
          languageId: [null],
          publisherId: [null],
          publishingYear: [null],
          less: [null],
          greater: [null],
        });
   }

  categories: any[] = [];
  languages: any[] = [];
  publishers: any[] = [];

  ngOnInit() {
    this.getAllItem();
    console.log(this.categories);

  }

  getAllItem() {
    this.service.getAllCategory().subscribe((res: any) => {
      this.categories = res;
    })
    this.service.getAllLanguage().subscribe((res: any) => {
      this.languages = res;
    })
    this.service.getAllPublisher().subscribe((res: any) => {
      this.publishers = res;
    })
  }

}
