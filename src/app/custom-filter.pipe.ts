import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: any[], searchFood: string): any[] {
    if (!items || !searchFood){
      return items;
    }
    searchFood = searchFood.toLowerCase();
    return items.filter(item => {
      for (let key in item) {
        
        if (item.hasOwnProperty(key) && item[key].toString().toLowerCase().includes(searchFood)) 
        { 
          return true;
        }
      }
      return false;
    });
  }
}
