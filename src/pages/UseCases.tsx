import { FileCode, Lock, ShoppingCart, FileText } from "lucide-react";
import CodeBlock from "../components/CodeBlock";
import { Card } from "@/components/ui/card";

function UseCases() {
  const authenticationCode = `const authBox = createSafeDepositBox({
  name: 'auth',
  safeInitialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  vaultReducers: {
    login: (state, action) => ({
      ...state,
      user: action.payload,
      isAuthenticated: true,
      loading: false,
    }),
    logout: (state) => ({
      ...state,
      user: null,
      isAuthenticated: false,
    }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
  },
});`;

  const shoppingCartCode = `const cartBox = createSafeDepositBox({
  name: 'cart',
  safeInitialState: {
    items: [],
    total: 0,
  },
  vaultReducers: {
    addItem: (state, action) => {
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems),
      };
    },
    removeItem: (state, action) => {
      const newItems = state.items.filter(
        item => item.id !== action.payload
      );
      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems),
      };
    },
    updateQuantity: (state, action) => {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems),
      };
    },
  },
});`;

  const formManagementCode = `const formBox = createSafeDepositBox({
  name: 'form',
  safeInitialState: {
    values: {},
    errors: {},
    touched: {},
    isSubmitting: false,
  },
  vaultReducers: {
    setField: (state, action) => ({
      ...state,
      values: {
        ...state.values,
        [action.payload.field]: action.payload.value,
      },
    }),
    setErrors: (state, action) => ({
      ...state,
      errors: action.payload,
    }),
    setTouched: (state, action) => ({
      ...state,
      touched: {
        ...state.touched,
        [action.payload]: true,
      },
    }),
    setSubmitting: (state, action) => ({
      ...state,
      isSubmitting: action.payload,
    }),
    resetForm: () => ({
      values: {},
      errors: {},
      touched: {},
      isSubmitting: false,
    }),
  },
});`;

  return (
    <div className="max-w-4xl px-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <FileCode className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Real-World Use Cases
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Explore practical examples of StateVault in common scenarios.
        </p>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Authentication Management</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          A complete authentication state management solution:
        </p>
        <Card className="overflow-hidden">
          <CodeBlock code={authenticationCode} language="typescript" />
        </Card>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <ShoppingCart className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Managing a shopping cart with items and total calculation:
        </p>
        <Card className="overflow-hidden">
          <CodeBlock code={shoppingCartCode} language="typescript" />
        </Card>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Form Management</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Complex form state management with validation:
        </p>
        <Card className="overflow-hidden">
          <CodeBlock code={formManagementCode} language="typescript" />
        </Card>
      </section>
    </div>
  );
}

export default UseCases;
