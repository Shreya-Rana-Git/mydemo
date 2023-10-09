import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitcount'
})
export class DigitcountPipe implements PipeTransform {

  transform(value: number): number {
    let n=value.toString().length;
    
    
    return n;
  }

}
