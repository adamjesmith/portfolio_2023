import { ThemeProvider } from 'next-themes';
import React, { FC, useCallback, useMemo } from 'react';

export interface State {
  burgerMenuOpen: boolean;
}

const initialState = {
  burgerMenuOpen: false,
};

type Action =
  | {
      type: 'OPEN_BURGERMENU';
    }
  | {
      type: 'CLOSE_BURGERMENU';
    };

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = 'UIContext';

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_BURGERMENU': {
      return {
        ...state,
        burgerMenuOpen: true,
      };
    }
    case 'CLOSE_BURGERMENU': {
      return {
        ...state,
        burgerMenuOpen: false,
      };
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openBurgerMenu = useCallback(
    () => dispatch({ type: 'OPEN_BURGERMENU' }),
    [dispatch]
  );
  const closeBurgerMenu = useCallback(
    () => dispatch({ type: 'CLOSE_BURGERMENU' }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      openBurgerMenu,
      closeBurgerMenu,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </UIProvider>
);
