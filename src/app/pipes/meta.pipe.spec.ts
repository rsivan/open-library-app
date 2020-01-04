import { MetaPipe } from './meta.pipe';

describe('MetaPipe', () => {
  it ('null entry', () => {
    expect(MetaPipe.transformer(null)).toBe(null);
  });
  it ('text with no stars', () => {
    expect(MetaPipe.transformer('this text has no stars!')).toBe('this text has no stars!');
  });
  it ('text with one em word', () => {
    expect(MetaPipe.transformer('this *text* is em\'ed!')).toBe('this <em>text</em> is em\'ed!');
  });
  it ('text fully em\'ed', () => {
    expect(MetaPipe.transformer('*this text is fully em\'ed!*')).toBe('<em>this text is fully em\'ed!</em>');
  });
  it ('text with unmatched star', () => {
    expect(MetaPipe.transformer('this *text has unmatched star')).toBe('this *text has unmatched star');
  });
  it ('text with double stars', () => {
    expect(MetaPipe.transformer('this **text has double stars**')).toBe('this <h2>text has double stars</h2>');
  });
  it ('text with new line', () => {
    expect(MetaPipe.transformer('this text has a new line:\nnext line')).toBe('this text has a new line:<br/><br/>next line');
  });
  it ('text with 2 new lines together', () => {
    expect(MetaPipe.transformer('this text has two new lines:\n\nnext line')).toBe('this text has two new lines:<br/><br/>next line');
  });
  it ('ref', () => {
    expect(MetaPipe.transformer('this is a ref: [ref name](http://some-url.com).'))
    .toBe('this is a ref: <a href="http://some-url.com">ref name</a>.');
  });
  it ('ref with additional [ ] ', () => {
    expect(MetaPipe.transformer('this is a ref: [c] etc [ref name](http://some-url.com).'))
    .toBe('this is a ref: [c] etc <a href="http://some-url.com">ref name</a>.');
  });
  it ('foot ref', () => {
    expect(MetaPipe.footRef('try this: [Some Data with a reference][1] ...\n[1]: http://some-url.com\nThen new line.'))
    .toBe('try this: <a href="http://some-url.com">Some Data with a reference</a> ...\nThen new line.');
  });
  it ('foot ref and br', () => {
    // tslint:disable-next-line: max-line-length
    expect(MetaPipe.transformer(`William Shakespeare...any other playwright.  ([Source][1].)

[1]:http://en.wikipedia.org/wiki/William_Shakespeare

Looking for the '[First Folio](https://openlibrary.org/works/OL362289W/Plays)'?`))
    // tslint:disable-next-line: max-line-length
    .toBe(`William Shakespeare...any other playwright.  (<a href="http://en.wikipedia.org/wiki/William_Shakespeare">Source</a>.)<br/><br/>Looking for the '<a href="https://openlibrary.org/works/OL362289W/Plays">First Folio</a>'?`);
  });
  // it ('text with multiplications', () => {
  //   const pipe = new MetaPipe();
  //   expect(pipe.transform('a * b * c')).toBe('a * b * c');
  // });
});
