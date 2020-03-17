import React from 'react';
import {Text, View, Easing} from 'react-native';
import Typography from '../../../../components/ui/typography';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAuthProvider} from '../../../../providers/auth-provider';
import {homeViewStyles, ShowText} from './styles';
import {useThemeProvider} from '../../../../providers/theme-provider';
import {useIsFocused} from '@react-navigation/native';
import {useContentProvider} from '../../../../providers/content-provider';

function HomeView() {
  const {
    theme: {
      colors: {secondary, primary},
    },
  } = useThemeProvider();
  const {
    content: {
      home: {HOME_VIEW_TITLE},
    },
  } = useContentProvider();
  const {logout} = useAuthProvider();
  const isFocused = useIsFocused();

  if (!isFocused)
    return (
      <View
        style={{
          ...homeViewStyles.container,
          backgroundColor: secondary,
        }}></View>
    );

  return (
    <SafeAreaView style={{backgroundColor: secondary}}>
      <ShowText
        duration={0.4}
        easing={Easing.bezier(0.075, 0.82, 0.165, 1)}
        style={{...homeViewStyles.container, backgroundColor: primary}}>
        <Typography
          align="center"
          color="white"
          onPress={() => logout()}
          variant="title2">
          {HOME_VIEW_TITLE}
        </Typography>
      </ShowText>
    </SafeAreaView>
  );
}

export default HomeView;
