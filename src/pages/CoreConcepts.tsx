import CodeBlock from '../components/CodeBlock';

function CoreConcepts() {
  const safeDepositBoxCode = `// Creating a SafeDepositBox for user state
const userBox = createSafeDepositBox({
  name: 'user',
  safeInitialState: {
    profile: null,
    isLoading: false,
    error: null,
  },
  vaultReducers: {
    setProfile: (state, action) => ({
      ...state,
      profile: action.payload,
      isLoading: false,
    }),
    setLoading: (state, action) => ({
      ...state,
      isLoading: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),
  },
});`;

  const hookUsageCode = `function UserProfile() {
  const profile = useVaultAccess((state) => state.user.profile);
  const dispatch = useVaultKey();

  const handleUpdateProfile = (newData) => {
    dispatch(userBox.keys.setProfile(newData));
  };

  return (
    // Your component JSX
  );
}`;

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">
        Core Concepts
      </h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          SafeDepositBox
        </h2>
        <p className="text-muted-foreground mb-4">
          A SafeDepositBox is a modular state container that encapsulates a slice of your application state:
        </p>
        <CodeBlock code={safeDepositBoxCode} language="typescript" />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Hooks
        </h2>
        <p className="text-muted-foreground mb-4">
          StateVault provides two main hooks for accessing and updating state:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>useVaultAccess - For reading state</li>
          <li>useVaultKey - For dispatching actions</li>
        </ul>
        <CodeBlock code={hookUsageCode} language="typescript" />
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Type Safety
        </h2>
        <p className="text-muted-foreground mb-4">
          StateVault is built with TypeScript and provides complete type safety:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Automatic type inference for state and actions</li>
          <li>Type-safe selectors</li>
          <li>Compile-time checks for action payloads</li>
          <li>IntelliSense support for state access</li>
        </ul>
      </section>
    </div>
  );
}

export default CoreConcepts;