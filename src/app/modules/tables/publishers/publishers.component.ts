import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publisher } from 'src/app/_shared/components/models/api.model';
import { ApiService } from '../../../_shared/components/services/api.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  constructor( protected router: Router, private service: ApiService) { }

  items: Publisher[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllPublisher().subscribe((res: any) => {
      this.items = res;
    })
  }

  clickCreate() {
    this.router.navigate([`/publishers/create`]);
  }

  clickUpdate(item: any) {
    console.log(item.id);

    this.router.navigate([`/publishers/${item.id}`]);
  }

}
