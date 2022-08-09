import React, {createContext, useContext, useReducer} from 'react';
import {IContextTheme, ITheme, ThemeAction, ThemeActionKind} from './reducer';

export const lightTheme: ITheme = {
  color: 'black',
  background: 'white',
};

export const darkTheme: ITheme = {
  color: 'white',
  background: 'black',
};

const ThemeContext = createContext({} as IContextTheme);

export function useTheme(): IContextTheme {
  return useContext(ThemeContext);
}

export function themeReducer(theme: ITheme, actionTheme: ThemeAction): ITheme {
  const {type, payload} = actionTheme;
  switch (type) {
    case 'Change':
      return payload;
    case 'Background':
      return {...theme, background: payload};
    case 'Color':
      return {...theme, color: payload};
    default:
      return {...theme};
  }
}

export function ThemeProvider({children}: {children: JSX.Element}) {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);
  const value: IContextTheme = {theme, dispatch};

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
