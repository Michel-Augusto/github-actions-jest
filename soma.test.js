
const soma = require('./calculadora.js')
const subtracao = require('./calculadora.js')


test('Validação soma', () => {
    expect(soma(2,3)).toBe(5);
    expect(soma(-5, -2)).toBe(-7)
  });