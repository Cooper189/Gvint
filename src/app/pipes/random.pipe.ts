import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    (value || []).map((item, index) => {
      if (item.nonPlayer) {
        value.splice(index, 1);
        value.unshift(item);
      }
    });
    return value;
  }

}
