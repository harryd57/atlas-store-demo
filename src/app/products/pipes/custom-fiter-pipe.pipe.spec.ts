import { CustomFilterPipe } from './custom-fiter.pipe';

describe('CustomFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
