
const {soma, subtracao, multiplicacao, divisao} = require('./calculadora.js') ;


test('Validação soma', () => {
    expect(soma(2,3)).toBe(5);
    expect(soma(-5, -2)).toBe(-7)
}) ;

test('Validação subtracao', () => {
  expect(subtracao(8,4)).toBe(4);
  expect(subtracao(-12, -10)).toBe(-2)
}) ;

test('Validação multiplicacao', () => {
  expect(multiplicacao(16,2)).toBe(32);
  expect(multiplicacao(23, 0)).toBe(0)
}) ;

test('Validação divisao', () => {
  expect(divisao(8,4)).toBe(2);
  expect(divisao(12, 1)).toBe(12)
}) ;