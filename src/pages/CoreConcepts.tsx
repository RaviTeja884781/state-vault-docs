import { Lightbulb, Box, Book as Hook, Shield } from "lucide-react";
import CodeBlock from "../components/CodeBlock";
import { Card } from "@/components/ui/card";

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
    <div className="max-w-4xl px-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Core Concepts
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Understanding the fundamental building blocks of StateVault.
        </p>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Box className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">SafeDepositBox</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          A SafeDepositBox is a modular state container that encapsulates a
          slice of your application state:
        </p>
        <Card className="overflow-hidden">
          <CodeBlock code={safeDepositBoxCode} language="typescript" />
        </Card>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Hook className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Hooks</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          StateVault provides two main hooks for accessing and updating state:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">useVaultAccess</h3>
            <p className="text-sm text-muted-foreground">
              For reading state with automatic reactivity
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">useVaultKey</h3>
            <p className="text-sm text-muted-foreground">
              For dispatching actions to update state
            </p>
          </Card>
        </div>
        <Card className="overflow-hidden">
          <CodeBlock code={hookUsageCode} language="typescript" />
        </Card>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Type Safety</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Automatic Type Inference",
              desc: "Get complete type information for state and actions",
            },
            {
              title: "Type-Safe Selectors",
              desc: "Ensure correct state access patterns at compile time",
            },
            {
              title: "Action Payload Validation",
              desc: "Catch payload type mismatches before they cause runtime errors",
            },
            {
              title: "IntelliSense Support",
              desc: "Get rich editor support for state and action access",
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

export default CoreConcepts;
