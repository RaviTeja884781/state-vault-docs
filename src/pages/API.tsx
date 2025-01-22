import CodeBlock from '../components/CodeBlock';

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
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">
        API Reference
      </h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          createSafeDepositBox
        </h2>
        <p className="text-muted-foreground mb-4">
          Creates a new state container with its reducers and action creators:
        </p>
        <CodeBlock code={createSafeDepositBoxAPI} language="typescript" />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          configureVault
        </h2>
        <p className="text-muted-foreground mb-4">
          Combines multiple SafeDepositBoxes into a single vault:
        </p>
        <CodeBlock code={configureVaultAPI} language="typescript" />
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Hooks
        </h2>
        <p className="text-muted-foreground mb-4">
          Hooks for interacting with the vault:
        </p>
        <CodeBlock code={hooksAPI} language="typescript" />
      </section>
    </div>
  );
}

export default API;