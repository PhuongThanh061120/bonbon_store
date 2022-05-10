import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  radioValue = 'A';
@Output() search = new EventEmitter()
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

  test1 = new FormControl(null);
  test2 = new FormControl(null);
  test3 = new FormControl(null);
  test4 = new FormControl(null);
  test5 = new FormControl(null);
searchValue: any;

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
this.searchChange()
  }

  searchChange() {
    this.test1.valueChanges.subscribe(val =>{
      this.searchValue = val;
      this.search.emit(this.searchValue)
    });
    this.test2.valueChanges.subscribe(val => {
      this.searchValue = val;
      this.search.emit(this.searchValue)
    });
    this.test3.valueChanges.subscribe(val => {
      this.searchValue = val;
      this.search.emit(this.searchValue)
    });
    this.test4.valueChanges.subscribe(val => {
      this.searchValue = val;
      this.search.emit(this.searchValue)
    });
    this.test5.valueChanges.subscribe(val => {
      this.searchValue = val;
      this.search.emit(this.searchValue)
    });
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

  searchName() {
    console.log('name');
  }

  searchPrice() {
    console.log('price');
  }

  searchCategory() {
    // this.productService.searchByCategoryId().subscribe
    console.log('category');
  }

  searchLanguage() {
    console.log('language');
  }

  searchPublisher() {
    console.log('publisher');
  }

}
