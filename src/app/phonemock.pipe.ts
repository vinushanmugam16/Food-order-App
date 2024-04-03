import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonemock'
})
export class PhonemockPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    const visibleDigits = value.slice(-2); 
    const maskedPart = value.slice(0, -2).replace(/\d/g, '*'); 

    return maskedPart + visibleDigits;
  }

}
