import { expect, test } from "bun:test";
import { solveQuadratic } from "./quadratic";

test("two distinct roots: x² - 3x + 2 = 0", () => {
  const result = solveQuadratic(1, -3, 2);
  expect(result.type).toBe("two");
  expect(result.roots).toBeDefined();
  expect(result.roots).toHaveLength(2);
  expect(result.roots![0]).toBeCloseTo(2);
  expect(result.roots![1]).toBeCloseTo(1);
});

test("double root (Δ=0): x² - 2x + 1 = 0", () => {
  const result = solveQuadratic(1, -2, 1);
  expect(result.type).toBe("one");
  expect(result.roots).toBeDefined();
  expect(result.roots).toHaveLength(1);
  expect(result.roots![0]).toBeCloseTo(1);
});

test("no real solutions (Δ<0): x² + 1 = 0", () => {
  const result = solveQuadratic(1, 0, 1);
  expect(result.type).toBe("none");
  expect(result.message).toBe("No real solutions");
});

test("linear (a=0, b≠0): 2x - 4 = 0", () => {
  const result = solveQuadratic(0, 2, -4);
  expect(result.type).toBe("one");
  expect(result.roots).toBeDefined();
  expect(result.roots).toHaveLength(1);
  expect(result.roots![0]).toBeCloseTo(2);
});

test("constant (a=0, b=0, c≠0): 5 = 0", () => {
  const result = solveQuadratic(0, 0, 5);
  expect(result.type).toBe("none");
  expect(result.message).toBe("No solution");
});

test("identity (a=0, b=0, c=0): 0 = 0", () => {
  const result = solveQuadratic(0, 0, 0);
  expect(result.type).toBe("infinite");
  expect(result.message).toBe("Infinite solutions");
});

test("negative discriminant: x² + x + 1 = 0", () => {
  const result = solveQuadratic(1, 1, 1);
  expect(result.type).toBe("none");
  expect(result.message).toBe("No real solutions");
});
