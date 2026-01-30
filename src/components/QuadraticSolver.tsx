import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { solveQuadratic } from "@/lib/quadratic";

export function QuadraticSolver() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<ReturnType<typeof solveQuadratic> | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSolve = () => {
    setError(null);
    setResult(null);

    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (Number.isNaN(aNum) || Number.isNaN(bNum) || Number.isNaN(cNum)) {
      setError("Please enter valid numbers for all coefficients.");
      return;
    }

    setResult(solveQuadratic(aNum, bNum, cNum));
  };

  const formatRoot = (x: number) => (Number.isInteger(x) ? x.toString() : x.toFixed(4));

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Quadratic Equation Solver</CardTitle>
        <CardDescription>
          Solve equations of the form ax² + bx + c = 0. Enter coefficients below.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="coef-a">a</Label>
            <Input
              id="coef-a"
              type="text"
              inputMode="decimal"
              placeholder="a"
              value={a}
              onChange={(e) => setA(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="coef-b">b</Label>
            <Input
              id="coef-b"
              type="text"
              inputMode="decimal"
              placeholder="b"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="coef-c">c</Label>
            <Input
              id="coef-c"
              type="text"
              inputMode="decimal"
              placeholder="c"
              value={c}
              onChange={(e) => setC(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={handleSolve} className="w-full">
          Solve
        </Button>

        {error && (
          <div className="rounded-md bg-destructive/10 text-destructive px-3 py-2 text-sm">
            {error}
          </div>
        )}

        {result && !error && (
          <div className="rounded-md border bg-muted/50 px-3 py-3 text-sm space-y-1">
            {result.type === "two" && (
              <>
                <p className="font-medium">Two solutions:</p>
                <p>x₁ = {formatRoot(result.roots[0])}</p>
                <p>x₂ = {formatRoot(result.roots[1])}</p>
              </>
            )}
            {result.type === "one" && (
              <>
                <p className="font-medium">One solution:</p>
                <p>x = {formatRoot(result.roots[0])}</p>
              </>
            )}
            {result.type === "none" && (
              <p className="font-medium">{result.message}</p>
            )}
            {result.type === "infinite" && (
              <p className="font-medium">{result.message}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
