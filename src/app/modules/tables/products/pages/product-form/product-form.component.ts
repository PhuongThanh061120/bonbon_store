import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../../../_shared/components/services/api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() myForm: FormGroup;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  categories: any[] = [];
  languages: any[] = [];
  publishers: any[] = [];

  constructor(private service: ApiService) { }

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
