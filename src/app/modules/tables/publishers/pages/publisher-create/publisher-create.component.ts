import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publisher-create',
  templateUrl: './publisher-create.component.html',
  styleUrls: ['./publisher-create.component.scss']
})
export class PublisherCreateComponent implements OnInit {

  @Input() myForm!: FormGroup
  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

  onSave() {
    this.gotoList();
  }

  onCancel() {
    this.gotoList();
  }

  gotoList() {
    this.router.navigate([`/publishers`]);
  }

}
