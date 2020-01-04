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
    expect(MetaPipe.transformer('this text has a new line:\nnext line')).toBe('this text has a new line:<br/>next line');
  });
  // it ('text with multiplications', () => {
  //   const pipe = new MetaPipe();
  //   expect(pipe.transform('a * b * c')).toBe('a * b * c');
  // });
});
