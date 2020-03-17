/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from './providers/theme-provider';
import MainNavigator from './navigator';
import {AuthProvider} from './providers/auth-provider';
import {ApiProvider} from './providers/api-provider';
import {ContentProvider} from './providers/content-provider';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <ContentProvider>
          <ApiProvider>
            <AuthProvider>
              <NavigationContainer>
                <MainNavigator />
              </NavigationContainer>
            </AuthProvider>
          </ApiProvider>
        </ContentProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
