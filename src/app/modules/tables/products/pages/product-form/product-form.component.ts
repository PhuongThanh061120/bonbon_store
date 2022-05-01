import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../../_shared/components/services/api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  myForm: FormGroup;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  categories: any[] = [];
  languages: any[] = [];
  publishers: any[] = [];

  constructor(private fb: FormBuilder, private service: ApiService) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      categoryId: [null, [Validators.required]],
      languageId: [null, [Validators.required]],
      publisherId: [null, [Validators.required]],
      publishingYear: [null],
      amount: [null, [Validators.required]],
      description: [''],
      price: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
      this.getAllItem();
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
