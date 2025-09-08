export function isValidCPF(cpf: string): boolean {
  const cleanedCPF = cpf.replace(/\D/g, '');
  
  const VALID_CPF_LENGTH = 11;
  if (cleanedCPF.length !== VALID_CPF_LENGTH) return false;
  
  const ALL_EQUAL_DIGITS_PATTERN = /^(\d)\1{10}$/;
  if (ALL_EQUAL_DIGITS_PATTERN.test(cleanedCPF)) return false;
  
  const firstVerifierDigit = calculateVerifierDigit(cleanedCPF, 9);
  const secondVerifierDigit = calculateVerifierDigit(cleanedCPF, 10);
  
  return (
    parseInt(cleanedCPF[9]) === firstVerifierDigit &&
    parseInt(cleanedCPF[10]) === secondVerifierDigit
  );

function calculateVerifierDigit(cpf: string, position: number): number {
  const sum = calculateWeightedSum(cpf, position);
  const remainder = sum % 11;
  
  return remainder < 2 ? 0 : 11 - remainder;
}

  
  function calculateWeightedSum(cpf: string, digitsCount: number): number {
    let sum = 0;
    const startingWeight = digitsCount + 1;
    
    for (let i = 0; i < digitsCount; i++) {
      const digit = parseInt(cpf[i]);
      const weight = startingWeight - i;
      sum += digit * weight;
    }
    
    return sum;
  }
}

export function isValidCPFFunctional(cpf: string): boolean {
  const cleanedCPF = cpf.replace(/\D/g, '');
  
  return [
    () => cleanedCPF.length === 11,
    () => !(/^(\d)\1{10}$/.test(cleanedCPF)),
    () => isFirstDigitValid(cleanedCPF),
    () => isSecondDigitValid(cleanedCPF)
  ].every(validation => validation());
}

function isFirstDigitValid(cpf: string): boolean {
  const expectedDigit = calculateDigit(cpf.slice(0, 9), [10, 9, 8, 7, 6, 5, 4, 3, 2]);
  return parseInt(cpf[9]) === expectedDigit;
}

function isSecondDigitValid(cpf: string): boolean {
  const expectedDigit = calculateDigit(cpf.slice(0, 10), [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
  return parseInt(cpf[10]) === expectedDigit;
}

function calculateDigit(digits: string, weights: number[]): number {
  const sum = digits
    .split('')
    .reduce((acc, digit, index) => acc + parseInt(digit) * weights[index], 0);
  
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}