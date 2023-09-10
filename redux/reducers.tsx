const ActionTypes = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  ADD_TO_CART: 'ADD_TO_CART',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};
interface SetProductsAction {
  type: typeof ActionTypes.SET_PRODUCTS;
  payload: Product[];
}

interface AddToCartAction {
  type: typeof ActionTypes.ADD_TO_CART;
  payload: Product;
}

interface LoginAction {
  type: typeof ActionTypes.LOGIN;
}

interface LogoutAction {
  type: typeof ActionTypes.LOGOUT;
}

// Combine all action types into one type
type AppAction = SetProductsAction | AddToCartAction | LoginAction | LogoutAction;


const productsReducer = (state: Product[] = [], action: SetProductsAction): Product[] => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

const cartReducer = (state: Product[] = [], action: AddToCartAction): Product[] => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

const authReducer = (state: State['auth'] = initialState.auth, action: AppAction): State['auth'] => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return { ...state, isAuthenticated: true };
    case ActionTypes.LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
