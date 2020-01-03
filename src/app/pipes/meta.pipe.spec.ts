import { MetaPipe } from './meta.pipe';

describe('MetaPipe', () => {
  it('create an instance', () => {
    const pipe = new MetaPipe();
    expect(pipe).toBeTruthy();
  });
  it ('null entry', () => {
    const pipe = new MetaPipe();
    expect(pipe.transform(null)).toBe(null);
  });
  it ('text with no stars', () => {
    const pipe = new MetaPipe();
    expect(pipe.transform('this text has no stars!')).toBe('this text has no stars!');
  });
  it ('text with one em word', () => {
    const pipe = new MetaPipe();
    expect(pipe.transform('this *text* is em\'ed!')).toBe('this <em>text</em> is em\'ed!');
  });
  it ('text fully em\'ed', () => {
    const pipe = new MetaPipe();
    expect(pipe.transform('*this text is fully em\'ed!*')).toBe('<em>this text is fully em\'ed!</em>');
  });
  it ('text with unmatched star', () => {
    const pipe = new MetaPipe();
    expect(pipe.transform('this *text has unmatched star')).toBe('this *text has unmatched star');
  });
  // it ('text with multiplications', () => {
  //   const pipe = new MetaPipe();
  //   expect(pipe.transform('a * b * c')).toBe('a * b * c');
  // });
});
