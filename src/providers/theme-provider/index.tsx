import {useState} from 'react';
import {makeProvider} from '../../_lib';
import {theme as defaultTheme} from '../../theme';

function useTheme() {
  const [theme, setTheme] = useState(defaultTheme);
  return {theme, setTheme};
}

export const {
  Provider: ThemeProvider,
  useProvider: useThemeProvider,
} = makeProvider(useTheme);
