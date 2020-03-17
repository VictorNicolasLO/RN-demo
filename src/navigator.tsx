import React from 'react';
import SignIn from './views/sign-in';
import SignUp from './views/sign-up';
import Home from './views/home';
import Auth from './views/auth';
import {createStackNavigator} from '@react-navigation/stack';
import {useAuthProvider} from './providers/auth-provider';
const Stack = createStackNavigator();
function MainNavigator() {
  const {isAuth} = useAuthProvider();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName="auth">
      {isAuth ? (
        <Stack.Screen
          name="home"
          component={Home}
          options={{animationEnabled: false, animationTypeForReplace: 'pop'}}
        />
      ) : (
        <>
          <Stack.Screen name="auth" component={Auth} />
          <Stack.Screen name="sign-in" component={SignIn} />
          <Stack.Screen name="sign-up" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default MainNavigator;
