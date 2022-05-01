import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogTopicComponent } from './blog-topic.component';
import { BlogTopicRoutes } from './blog-topic.routing';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  imports: [
    CommonModule,
    BlogTopicRoutes,
    NzIconModule,
    NzCardModule
  ],
  declarations: [BlogTopicComponent]
})
export class BlogTopicModule { }
