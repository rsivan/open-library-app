import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meta'
})
export class MetaPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const v = value ? value.replace(/\*(.*)\*/g, '<em>$1</em>') : value;
    return v;
  }

}
