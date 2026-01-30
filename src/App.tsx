import { QuadraticSolver } from "@/components/QuadraticSolver";
import "./index.css";

export function App() {
  return (
    <div className="container mx-auto p-8 relative z-10 min-h-screen flex flex-col items-center justify-center">
      <QuadraticSolver />
    </div>
  );
}

export default App;
