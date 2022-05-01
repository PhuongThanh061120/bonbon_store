import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyDisplay'
})
export class MoneyDisplayPipe extends CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, 'VND');
  }

}


