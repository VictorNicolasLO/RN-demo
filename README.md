# Frontend architecture

# Overview

The goal of this architecture is to divide the logic of the view as best as possible, recycle the logic by using React hooks and make the parameters easy to configure and update small changes without read lot of code.

# Project structure

![Frontend%20architecture/Untitled.png](Frontend%20architecture/Untitled.png)

## Content

Content is just a json that contains all Strings that application needs this is useful if you need to change some text quickly or if you need to introduce other languages. **Components** and **Views** are not going to access directly but they are going to access through the use of **Providers.**

## Providers

This is how components and views share logic, specifically hooks. they could provide **theming**, **content, api** and logic. the way to created could be tedious but I made a function to created easly here are some examples.

```typescript
// Content provider
import {makeProvider} from '../../_lib';
import {useState} from 'react';
import * as rawContent from '../../content';

function useContent() {
  const [content, setContent] = useState(rawContent);
  return {content, setContent};
}

export const {
  Provider: ContentProvider,
  useProvider: useContentProvider,
} = makeProvider(useContent);
```

```typescript
// Auth provider
import {useReducer} from 'react';
import {makeProvider} from '../../_lib';
import {authReducer} from './auth-reducer';
import {useApiProvider} from '../api-provider';
import {useNavigation} from '@react-navigation/native';

function useAuth() {
  const [authState, dispatch] = useReducer(authReducer, {});

  const {
    api: {auth},
  } = useApiProvider();

  async function login(username: string, password: string) {
    dispatch({
      type: 'login',
    });
    const response: any = await auth.signIn(username, password);

    dispatch({
      type: 'loginSuccess',
      payload: {
        username: response.username,
      },
    });
  }

  function logout() {
    dispatch({type: 'logout'});
  }

  return {
    ...authState,
    login,
    logout,
  };
}

export const {
  Provider: AuthProvider,
  useProvider: useAuthProvider,
} = makeProvider(useAuth);
```

```typescript
// initialization
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
```

## Views

**Views** are a place where you gather usage of providers, components, links and adjust the view as needed

## Components

Components has a specific purpose and it should be almost always stateless, and yes, it may mean many parameters to make it works but here is where hooks come to the rescue.

You could also put default components hooks in the same folder as component.

### Example

This is an example of a custom textfield I made where also styles are in other folder

```typescript
// text-field.tsx
import React from 'react';
import {TextInput, View, TextInputProps} from 'react-native';
import {textFieldStyle} from './style';
import Typography from '../typography';

interface Props extends TextInputProps {
  label: string;
}

function TextField(props: Props) {
  return (
    <View>
      <Typography style={textFieldStyle.label} variant="body1">
        {props.label}
      </Typography>
      <TextInput {...props} style={textFieldStyle.input} />
    </View>
  );
}

export default TextField;
```

The `hook`

```typescript
// use-multiple-text-fields.tsx

import {useState} from 'react';

function useMultipleTextFields(properties: string[]) {
  const [inputsValues, setInputsValues] = useState<any>({});
  function createOnSetValue(property: string) {
    return (ev: any) => {
      const newInputData: any = {};
      newInputData[property] = ev;
      setInputsValues({...inputsValues, ...newInputData});
    };
  }
  const inputs: any = {};
  function clear() {
    setInputsValues({});
  }

  properties.forEach(prop => {
    inputs[prop] = {
      onChangeText: createOnSetValue(prop),
      value: inputsValues[prop],
    };
  });

  return {clear, inputs};
}

export default useMultipleTextFields;
```

And how you can use it togehter

```typescript
    // sign-in.tsx
    function SignIn() {
      const {
        inputs: {username, password}, // Those have all properties to make it work
      } = useMultipleTextFields(['username', 'password']);

    	return <>
    				 <TextField label={USERNAME_PLACEHOLDER} {...username} />
    			   <TextField
                label={PASSWORD_PLACEHOLDER}
                secureTextEntry={true}
                {...password}
              />
    		</>
```
