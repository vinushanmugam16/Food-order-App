import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})

export class CustomFilterPipe implements PipeTransform {
  transform(items: any[], searchFood: string): any[] {
    if (!items || !searchFood) {
      return items;
    }
    const searchLowerCase = searchFood.toLowerCase();
    return items.filter(item => {
      for (let key in item) {
        if (item[key] && item[key].toString().toLowerCase().includes(searchLowerCase)) {
          return true;
        }
      }
      return false;
    });
  }
}