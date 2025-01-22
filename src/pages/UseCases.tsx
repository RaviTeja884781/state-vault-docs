import CodeBlock from '../components/CodeBlock';

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
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">
        Real-World Use Cases
      </h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Authentication Management
        </h2>
        <p className="text-muted-foreground mb-4">
          Handling user authentication state with StateVault:
        </p>
        <CodeBlock code={authenticationCode} language="typescript" />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Shopping Cart
        </h2>
        <p className="text-muted-foreground mb-4">
          Managing a shopping cart with items and total calculation:
        </p>
        <CodeBlock code={shoppingCartCode} language="typescript" />
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Form Management
        </h2>
        <p className="text-muted-foreground mb-4">
          Complex form state management with validation:
        </p>
        <CodeBlock code={formManagementCode} language="typescript" />
      </section>
    </div>
  );
}

export default UseCases;