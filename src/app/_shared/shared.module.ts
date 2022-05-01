import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZorroAntdModule } from './zorro-antd.module';
import { ShareComponentsModule } from './components/share-components.module';
import { PipeModule } from './pipe/pipe.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ZorroAntdModule,
    ShareComponentsModule,
    PipeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class SharedModule { }
