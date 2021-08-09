// M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]

// P = principal loan amount

// i = monthly interest rate

// n = number of months required to repay the loan

export const calculateMonthlyPayment = (
  totalLoanAmount = 0,
  downPaymentAmount = 0,
  interestRate = 0,
  mortgageLength = 0,
) => {
  const principal = totalLoanAmount - downPaymentAmount;
  const months = mortgageLength * 12;
  const monthlyInterestRate = interestRate / 100 / 12;
  return Number(
    (
      principal *
      ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
        (Math.pow(1 + monthlyInterestRate, months) - 1))
    ).toFixed(2),
  );
};
