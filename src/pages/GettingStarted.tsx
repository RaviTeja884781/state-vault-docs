import { Rocket, Terminal, Code, Zap } from "lucide-react";
import CodeBlock from "../components/CodeBlock";
import { Card } from "@/components/ui/card";

function GettingStarted() {
  const installCode = `npm install statevault`;

  const basicUsageCode = `import { createSafeDepositBox, configureVault, VaultGuard } from 'statevault';

// Create a SafeDepositBox for counter state
const counterBox = createSafeDepositBox({
  name: 'counter',
  safeInitialState: { value: 0 },
  vaultReducers: {
    increment: (state) => ({ ...state, value: state.value + 1 }),
    decrement: (state) => ({ ...state, value: state.value - 1 }),
  },
});

// Configure the vault with reducers
const vault = configureVault({
  vaultReducer: {
    [counterBox.name]: counterBox.vaultReducer,
  },
});

// Wrap your app with VaultGuard
function App() {
  return (
    <VaultGuard vault={vault}>
      <Counter />
    </VaultGuard>
  );
}`;

  return (
    <div className="max-w-4xl px-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Rocket className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Getting Started
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Get up and running with StateVault in your React application in
          minutes.
        </p>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Installation</h2>
        </div>
        <Card className="overflow-hidden">
          <CodeBlock code={installCode} language="bash" />
        </Card>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Here's a simple example of how to set up StateVault in your React
          application:
        </p>
        <Card className="overflow-hidden">
          <CodeBlock code={basicUsageCode} language="typescript" />
        </Card>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Key Concepts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "SafeDepositBox",
              desc: "Modular state containers for organized state management",
            },
            {
              title: "VaultGuard",
              desc: "Provider component that enables state access throughout your app",
            },
            {
              title: "Vault Configuration",
              desc: "Simple setup process for structuring your application state",
            },
            {
              title: "Keys",
              desc: "Type-safe action creators for predictable state updates",
            },
          ].map((item) => (
            <div key={item.title}>
              <Card className="p-4 h-full">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GettingStarted;
