import {Dispatch} from 'react';
import {ColorValue} from 'react-native';

export interface ITheme {
  color: ColorValue;
  background: ColorValue;
}

export type ThemeAction =
  | {type: 'Theme'; payload: ITheme}
  | {type: 'Color'; payload: ColorValue}
  | {type: 'Background'; payload: ColorValue};

export interface IContextTheme {
  theme: ITheme;
  dispatch: Dispatch<ThemeAction>;
}
