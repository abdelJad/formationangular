import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    if (value) {
      if (args) {
        return value.total_TTC();
      }
        return value.total_HT();
    }
    return '';
  }
}
