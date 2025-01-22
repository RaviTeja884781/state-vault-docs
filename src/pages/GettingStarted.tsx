import CodeBlock from '../components/CodeBlock';

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
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">
        Getting Started with StateVault
      </h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Installation
        </h2>
        <CodeBlock code={installCode} language="bash" />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Basic Usage
        </h2>
        <p className="text-muted-foreground mb-4">
          Here's a simple example of how to set up StateVault in your React application:
        </p>
        <CodeBlock code={basicUsageCode} language="typescript" />
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Key Concepts
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>SafeDepositBox - Modular state containers</li>
          <li>VaultGuard - Provider component for state access</li>
          <li>Vault Configuration - Setting up your state structure</li>
          <li>Keys - Action creators for state updates</li>
        </ul>
      </section>
    </div>
  );
}

export default GettingStarted;