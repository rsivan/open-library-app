import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'meta'
})
export class MetaPipe implements PipeTransform {

  static transformer(value: string): string {
    if (!value) {
      return value;
    }
    const v1 = value.replace(/\*\*(.*)\*\*/g, '<h2>$1</h2>');
    const v2 = v1.replace(/\*(.*)\*/g, '<em>$1</em>');
    const v3 = v2.replace(/\n/g, '<br/>');
    return v3;
  }

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, ...args: string[]) {
    if (!value) {
      return value;
    }
    const v = MetaPipe.transformer(value);
    return this.sanitizer.bypassSecurityTrustHtml(v);
  }

}
