import { FileCode, Box, Cog, Book as Hook } from "lucide-react";
import CodeBlock from "../components/CodeBlock";
import { Card } from "@/components/ui/card";

function API() {
  const createSafeDepositBoxAPI = `interface safeDepositBoxConfig<S = any> {
  name: string;
  safeInitialState: S;
  vaultReducers: VaultReducers<S>;
}

const box = createSafeDepositBox({
  name: 'example',
  safeInitialState: { count: 0 },
  vaultReducers: {
    increment: (state) => ({ ...state, count: state.count + 1 }),
  },
});`;

  const configureVaultAPI = `interface VaultConfig {
  vaultReducer: {
    [key: string]: VaultReducerFunction;
  };
}

const vault = configureVault({
  vaultReducer: {
    [counterBox.name]: counterBox.vaultReducer,
    [userBox.name]: userBox.vaultReducer,
  },
});`;

  const hooksAPI = `// Reading state
const value = useVaultAccess(
  (state) => state.example.count
);

// Updating state
const dispatch = useVaultKey();
dispatch(box.keys.increment());

// Async actions
dispatch(async (dispatch, getState) => {
  const state = getState();
  const response = await api.fetchData();
  dispatch(box.keys.setData(response));
});`;

  return (
    <div className="max-w-4xl px-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <FileCode className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            API Reference
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Complete API documentation for StateVault's core features.
        </p>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Box className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">createSafeDepositBox</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Creates a new state container with its reducers and action creators:
        </p>
        <Card className="overflow-hidden">
          <CodeBlock code={createSafeDepositBoxAPI} language="typescript" />
        </Card>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Cog className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">configureVault</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Combines multiple SafeDepositBoxes into a single vault:
        </p>
        <Card className="overflow-hidden">
          <CodeBlock code={configureVaultAPI} language="typescript" />
        </Card>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <Hook className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Hooks</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Hooks for interacting with the vault:
        </p>
        <Card className="overflow-hidden">
          <CodeBlock code={hooksAPI} language="typescript" />
        </Card>
      </section>
    </div>
  );
}

export default API;
