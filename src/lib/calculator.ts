export interface CalculatorInput {
  principal: number;
  apy: number;
  months: number;
  platformFee: number;
}

export interface CalculatorResult {
  safePrincipal: number;
  safeApy: number;
  safeMonths: number;
  safePlatformFee: number;
  monthlyRate: number;
  projectedBalance: number;
  grossProfit: number;
  feeAmount: number;
  netProfit: number;
  finalBalance: number;
  annualizedReturn: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function parseNonNegativeNumber(value: string) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return 0;
  }

  return Math.max(0, parsed);
}

export function calculateProjection(input: CalculatorInput): CalculatorResult {
  const safePrincipal = Math.max(0, input.principal);
  const safeApy = Math.max(0, input.apy);
  const safeMonths = clamp(input.months, 1, 60);
  const safePlatformFee = clamp(input.platformFee, 0, 100);

  const monthlyRate = Math.pow(1 + safeApy / 100, 1 / 12) - 1;
  const projectedBalance =
    safePrincipal * Math.pow(1 + monthlyRate, safeMonths);
  const grossProfit = projectedBalance - safePrincipal;
  const feeAmount = grossProfit * (safePlatformFee / 100);
  const netProfit = grossProfit - feeAmount;
  const finalBalance = safePrincipal + netProfit;
  const annualizedReturn =
    safePrincipal > 0 ? (finalBalance / safePrincipal - 1) * 100 : 0;

  return {
    safePrincipal,
    safeApy,
    safeMonths,
    safePlatformFee,
    monthlyRate,
    projectedBalance,
    grossProfit,
    feeAmount,
    netProfit,
    finalBalance,
    annualizedReturn,
  };
}
