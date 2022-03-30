import { createContext, useContext, useReducer } from "react";

interface AuthProps {
  token: string | null;
  login: (token: string) => void;
  authLogout: () => void;
}

type State = {
  token: string | null;
};

enum ActionKind {
  UPDATE = "UPDATE_TOKEN",
  REMOVE = "REMOVE_TOKEN",
}

interface Action {
  type: string;
  payload: string | null;
}

const INITIAL_STATE = {
  token: null,
};

const AuthContext = createContext<AuthProps>({
  token: null,
  login: token => {},
  authLogout: () => {},
});

function authReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionKind.UPDATE:
      return {
        ...state,
        token: action.payload,
      };
    case ActionKind.REMOVE:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
  const login = (token: string) => {
    localStorage.setItem("token", token);
    dispatch({ type: ActionKind.UPDATE, payload: token });
  };
  const authLogout = () => {
    dispatch({ type: ActionKind.REMOVE, payload: null });
  };
  return (
    <AuthContext.Provider
      value={{ token: state.token, login, authLogout }}
      {...props}
    />
  );
}

export { AuthProvider, AuthContext };

export const useAuth = () => useContext(AuthContext);
