function sum(num1?: number, num2?: number): number | null {
  if (!num1 || !num2) return null
  return num1 + num2
}
sum()
