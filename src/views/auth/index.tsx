import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Easing, Alert} from 'react-native';
import {styles, ShowTitle, ShowButtons} from './styles';
import {useThemeProvider} from '../../providers/theme-provider';
import Typography from '../../components/ui/typography';
import Button from '../../components/ui/button';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {useContentProvider} from '../../providers/content-provider';
function Auth() {
  const {
    theme: {
      colors: {primary: primaryColor},
    },
  } = useThemeProvider();
  const {
    content: {
      auth: {SIGN_IN_BUTTON, SIGN_UP_BUTTON, APP_SUBTITLE, APP_TITLE},
    },
  } = useContentProvider();
  const navigtor = useNavigation();
  const isFocused = useIsFocused();

  function goSignIn() {
    navigtor.navigate('sign-in');
  }

  function goSignUp() {
    navigtor.navigate('sign-up');
  }
  if (!isFocused) return null;
  return (
    <SafeAreaView>
      <View style={{...styles.container}}>
        <View style={{...styles.topContent, backgroundColor: primaryColor}}>
          <ShowTitle duration={0.3} easing={Easing.out(Easing.circle)}>
            <Typography color="white" variant="title1">
              {APP_TITLE}
            </Typography>
          </ShowTitle>
        </View>
        <View style={{...styles.bottomControls}}>
          <ShowButtons
            style={styles.showButton}
            duration={0.3}
            delay={0.05}
            easing={Easing.out(Easing.quad)}>
            <Typography style={styles.appPresentation} variant="title2">
              {APP_SUBTITLE}
            </Typography>
          </ShowButtons>
          <ShowButtons
            style={styles.showButton}
            duration={0.3}
            delay={0.1}
            easing={Easing.out(Easing.quad)}>
            <Button
              onPress={goSignIn}
              style={styles.buttonStyle}
              label={SIGN_IN_BUTTON}
              variant="filled"
            />
          </ShowButtons>
          <ShowButtons
            style={styles.showButton}
            duration={0.4}
            delay={0.15}
            easing={Easing.out(Easing.circle)}>
            <Button
              onPress={goSignUp}
              style={styles.buttonStyle}
              label={SIGN_UP_BUTTON}
              variant="outlined"
            />
          </ShowButtons>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Auth;
