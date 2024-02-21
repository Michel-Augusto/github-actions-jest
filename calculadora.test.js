
const {soma, subtracao} = require('./calculadora.js')


test('Validação soma', () => {
    expect(soma(2,3)).toBe(5);
    expect(soma(-5, -2)).toBe(-7)
});

test('Validação subtracao', () => {
  expect(subtracao(8,4)).toBe(4);
  expect(subtracao(-12, -10)).toBe(-2)
});

