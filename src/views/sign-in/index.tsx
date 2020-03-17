/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Easing, View, ActivityIndicator} from 'react-native';
import {ShowFormsView, styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

import Button from '../../components/ui/button';
import TextField from '../../components/ui/text-field';
import useMultipleTextFields from '../../components/ui/text-field/hooks/use-multiple-text-fields';
import {useAuthProvider} from '../../providers/auth-provider';
import {useThemeProvider} from '../../providers/theme-provider';
import Typography from '../../components/ui/typography';
import {useContentProvider} from '../../providers/content-provider';
function SignIn() {
  const {
    inputs: {username, password},
  } = useMultipleTextFields(['username', 'password']);
  const {
    content: {
      auth: {
        SIGN_IN_BUTTON,
        USERNAME_PLACEHOLDER,
        PASSWORD_PLACEHOLDER,
        SIGN_IN_WELCOME,
      },
    },
  } = useContentProvider();
  const {login, loading} = useAuthProvider();
  const {
    theme: {
      colors: {primary},
    },
  } = useThemeProvider();

  async function signIn() {
    await login(username.value, password.value);
  }

  if (loading)
    return (
      <View>
        <ActivityIndicator
          style={styles.loadingContainer}
          size="large"
          color={primary}
        />
      </View>
    );

  return (
    <SafeAreaView>
      <View style={styles.SignInContainer}>
        <Typography variant="title2" align="center">
          {SIGN_IN_WELCOME}
        </Typography>
        <ShowFormsView
          style={styles.ShowFormsView}
          duration={1}
          easing={Easing.out(Easing.exp)}>
          <TextField label={USERNAME_PLACEHOLDER} {...username} />
        </ShowFormsView>
        <ShowFormsView
          style={styles.ShowFormsView}
          duration={1}
          delay={0.1}
          easing={Easing.out(Easing.exp)}>
          <TextField
            label={PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            {...password}
          />
        </ShowFormsView>
        <ShowFormsView
          duration={1}
          delay={0.2}
          easing={Easing.out(Easing.exp)}
          style={styles.ShowFormsView}>
          <Button
            style={styles.button}
            onPress={signIn}
            variant="filled"
            label={SIGN_IN_BUTTON}
          />
        </ShowFormsView>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;
