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
    let v = value;
    v = MetaPipe.sourceRef(v);
    v = MetaPipe.title(v);
    v = MetaPipe.em(v);
    v = MetaPipe.br(v);
    v = MetaPipe.ref(v);
    return v;
  }

  /**
   * replace **text** with <h2>text</h2>
   * @param value original text
   */
  static title(value: string) {
    return value.replace(/\*\*(.*)\*\*/g, '<h2>$1</h2>');
  }

  /**
   * replace *text* with <em>text</em>
   * @param value original text
   */
  static em(value: string) {
    return value.replace(/\*(.*)\*/g, '<em>$1</em>');
  }

  /**
   * replace new lines with <br/>
   * @param value original text
   */
  static br(value: string) {
    return value.replace(/(\s*\n)+/g, '<br/>');
  }

  /**
   * replace ref in the form of [text](url) with <a href=url>text</a>
   * @param value original text
   */
  static ref(value: string) {
    return value.replace(/\[(.*)\]\((.*)\)/g, '<a href="$2">$1</a>');
  }

  /**
   * replace source refs in the form of [Source][1]) with a href into [1]: content
   * @param value original text
   */
  static sourceRef(value: string) {
    let v = value;
    // console.log('v: ', v);
    for (let i = 1; i < 100; ++i) {
      const regexp = new RegExp(`\\[${i}\\]:(\\S*).*\\n?`);
      // console.log('regexp: ', regexp);
      const ref = v.match(regexp);
      // console.log('match result: ', ref);
      if (!ref || ref.length <= 1) {
        break;
      }
      v = v.replace(regexp, '');
      // console.log('v: ', v);
      const regexp2 = new RegExp(`\\[Source\\]\\[${i}\\]`);
      v = v.replace(regexp2, `<a href="${ref[1]}">Source</a>`);
      // console.log('v: ', v);
    }
    return v;
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
