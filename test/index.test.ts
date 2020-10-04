import payloadId from '../src';

function findDuplicates(arr: number[]): number[] {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

describe('payloadId', () => {
  it('returns a number', () => {
    const result = payloadId();
    expect(result).toBeTruthy();
    expect(typeof result === 'number').toBeTruthy();
  });

  it('returns a time-based number', () => {
    const before = Date.now();
    const result = payloadId();
    const time = Math.floor(result * 1e-3);
    const after = Date.now();
    expect(before <= time).toBeTruthy();
    expect(after >= time).toBeTruthy();
  });

  it('returns all different values', () => {
    const results: number[] = [];
    for (let i = 0; i < 10; i++) {
      results.push(payloadId());
    }
    const duplicates = findDuplicates(results);
    expect(duplicates.length === 0).toBeTruthy();
  });
});
