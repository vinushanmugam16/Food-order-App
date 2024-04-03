import { PhonemockPipe } from './phonemock.pipe';

describe('PhonemockPipe', () => {
  it('create an instance', () => {
    const pipe = new PhonemockPipe();
    expect(pipe).toBeTruthy();
  });
});
