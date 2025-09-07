import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  it('create an instance', () => {
    const testPipe = new TestPipe();
    expect(testPipe).toBeTruthy();
  });
});