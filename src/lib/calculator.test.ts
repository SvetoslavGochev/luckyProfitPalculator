import { describe, expect, it } from "vitest";
import { calculateProjection, parseNonNegativeNumber } from "./calculator";

describe("parseNonNegativeNumber", () => {
  it("parses valid numeric input", () => {
    expect(parseNonNegativeNumber("12.5")).toBe(12.5);
  });

  it("returns 0 for negative or invalid values", () => {
    expect(parseNonNegativeNumber("-3")).toBe(0);
    expect(parseNonNegativeNumber("abc")).toBe(0);
    expect(parseNonNegativeNumber("Infinity")).toBe(0);
  });
});

describe("calculateProjection", () => {
  it("computes expected values for default scenario", () => {
    const result = calculateProjection({
      principal: 25000,
      apy: 18,
      months: 12,
      platformFee: 2.5,
    });

    expect(result.projectedBalance).toBeCloseTo(29500, 6);
    expect(result.grossProfit).toBeCloseTo(4500, 6);
    expect(result.feeAmount).toBeCloseTo(112.5, 6);
    expect(result.netProfit).toBeCloseTo(4387.5, 6);
    expect(result.finalBalance).toBeCloseTo(29387.5, 6);
    expect(result.annualizedReturn).toBeCloseTo(17.55, 6);
  });

  it("clamps out-of-range values", () => {
    const result = calculateProjection({
      principal: -100,
      apy: -5,
      months: 999,
      platformFee: 300,
    });

    expect(result.safePrincipal).toBe(0);
    expect(result.safeApy).toBe(0);
    expect(result.safeMonths).toBe(60);
    expect(result.safePlatformFee).toBe(100);
    expect(result.finalBalance).toBe(0);
    expect(result.annualizedReturn).toBe(0);
  });

  it("avoids divide-by-zero when principal is 0", () => {
    const result = calculateProjection({
      principal: 0,
      apy: 25,
      months: 12,
      platformFee: 10,
    });

    expect(Number.isFinite(result.annualizedReturn)).toBe(true);
    expect(result.annualizedReturn).toBe(0);
  });
});
