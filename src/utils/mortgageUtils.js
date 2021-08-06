// M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]

// P = principal loan amount

// i = monthly interest rate

// n = number of months required to repay the loan

export const calculateMonthlyPayment = (
  totalLoanAmount,
  downPaymentAmount,
  interestRate,
  mortgageLength,
) => {
  const principal = totalLoanAmount - downPaymentAmount;
  const months = mortgageLength * 12;
  return (
    (principal * Math.pow(1 + interestRate, months)) /
    (Math.pow(1 + interestRate, months) - 1)
  );
};
