import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseSentence'
})
export class ReverseSentencePipe implements PipeTransform {

  transform(value: string): string {
     return value.split(" ").reverse().join(" ");
  }

}
