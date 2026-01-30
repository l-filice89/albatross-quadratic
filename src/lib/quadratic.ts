export type QuadraticResult =
  | { type: "two"; roots: [number, number] }
  | { type: "one"; roots: [number] }
  | { type: "none"; message: string }
  | { type: "infinite"; message: string };

export function solveQuadratic(a: number, b: number, c: number): QuadraticResult {
  if (a === 0) {
    if (b === 0) {
      if (c === 0) {
        return { type: "infinite", message: "Infinite solutions" };
      }
      return { type: "none", message: "No solution" };
    }
    const x = -c / b;
    return { type: "one", roots: [x] };
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return { type: "none", message: "No real solutions" };
  }

  if (discriminant === 0) {
    const x = -b / (2 * a);
    return { type: "one", roots: [x] };
  }

  const sqrtD = Math.sqrt(discriminant);
  const x1 = (-b + sqrtD) / (2 * a);
  const x2 = (-b - sqrtD) / (2 * a);
  return { type: "two", roots: [x1, x2] };
}
