const math = require('./math');

test('two plus two is four', () => {
    expect(math.add(2, 2)).toBe(4);
});

test('two minus two is zero', () => {
    expect(math.sub(2, 2)).toBe(0);
});