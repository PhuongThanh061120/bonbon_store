import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from 'src/app/_shared/components/services/product.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  myFiles:string [] = [];
  id: any;

   myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, protected route: ActivatedRoute,
    private productService: ProductService,
    private notification: NzNotificationService,
    private router: Router
    ) { }

  get f(){
    return this.myForm.controls;
  }

  onFileChange(event:any) {

        for (var i = 0; i < event.target.files.length; i++) {
            this.myFiles.push(event.target.files[i]);
        }
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

  gotoList() {
    this.router.navigate([`/products-table`]);
  }

  submit(){
    const formData = new FormData();
console.log(formData);
    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append("file[]", this.myFiles[i]);
      console.log(formData, '2s');
    }
console.log(formData, '3');
    this.productService.upload(this.id, formData).subscribe(() => {
      this.notification.success(
        'Thành công',
        'Thêm mới thành công'
      );
      this.gotoList();
    })



    // this.http.post('http://localhost:8080', formData)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Uploaded Successfully.');
    //   })
  }

}
