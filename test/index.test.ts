import payloadId from '../src';

describe('payloadId', () => {
  it('returns a number', () => {
    const result = payloadId();
    expect(result).toBeTruthy();
    expect(typeof result === 'number').toBeTruthy();
  });

  it('returns a time-based number', () => {
    const before = Date.now();
    console.log('before', before);
    const result = payloadId();
    console.log('result', result);
    const time = Math.round(result * 1e-3);
    console.log('time', time);
    const after = Date.now();
    console.log('after', after);
    expect(before <= time).toBeTruthy();
    expect(after >= time).toBeTruthy();
  });

  it('returns random numbers', () => {
    const res1 = payloadId();
    console.log('res1', res1);
    const res2 = payloadId();
    console.log('res2', res2);
    const res3 = payloadId();
    console.log('res3', res3);
    expect(res1 !== res2).toBeTruthy();
    expect(res1 !== res3).toBeTruthy();
    expect(res2 !== res3).toBeTruthy();
  });
});
