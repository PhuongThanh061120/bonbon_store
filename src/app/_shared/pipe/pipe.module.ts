import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullUrlPipe } from './full-url.pipe';
import { MoneyDisplayPipe } from './money-display.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FullUrlPipe,
    MoneyDisplayPipe
  ],
  exports: [
    FullUrlPipe,
    MoneyDisplayPipe
  ]
})
export class PipeModule { }
