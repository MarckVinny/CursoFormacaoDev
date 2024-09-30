import { somar } from "../src/calc"

test('Deve somar corretamente', () => {
  const resultado = somar(12, 20)
  expect(resultado).toBe(32)
})