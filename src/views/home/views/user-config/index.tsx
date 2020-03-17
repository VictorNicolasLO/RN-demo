import React from 'react';
import {View, Easing} from 'react-native';
import Typography from '../../../../components/ui/typography';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAuthProvider} from '../../../../providers/auth-provider';
import {userConfigStyles, ShowText} from './styles';
import {useThemeProvider} from '../../../../providers/theme-provider';
import {useIsFocused} from '@react-navigation/native';
import {useContentProvider} from '../../../../providers/content-provider';

function UserConfig() {
  const {
    theme: {
      colors: {secondary, primary},
    },
  } = useThemeProvider();
  const {logout} = useAuthProvider();
  const {
    content: {
      home: {USER_CONFIG_TITLE},
    },
  } = useContentProvider();
  const isFocused = useIsFocused();

  if (!isFocused)
    return (
      <View
        style={{
          ...userConfigStyles.container,
          backgroundColor: primary,
        }}></View>
    );
  return (
    <SafeAreaView style={{backgroundColor: primary}}>
      <ShowText
        duration={0.4}
        easing={Easing.bezier(0.075, 0.82, 0.165, 1)}
        style={{...userConfigStyles.container, backgroundColor: secondary}}>
        <Typography
          align="center"
          color="white"
          onPress={() => logout()}
          variant="title2">
          {USER_CONFIG_TITLE}
        </Typography>
      </ShowText>
    </SafeAreaView>
  );
}

export default UserConfig;
