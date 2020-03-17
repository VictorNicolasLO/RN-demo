import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import HomeNavigator from './navigator';
import {Text, View} from 'react-native';
import Typography from '../../components/ui/typography';
import {useNavigation} from '@react-navigation/native';
import {useAuthProvider} from '../../providers/auth-provider';
import Button from '../../components/ui/button';
import {useThemeProvider} from '../../providers/theme-provider';
function Home() {
  const {logout} = useAuthProvider();
  const {
    theme: {
      colors: {primary},
    },
  } = useThemeProvider();
  return (
    <>
      <View style={{backgroundColor: primary, padding: 10}}>
        <Button
          style={{width: 150}}
          onPress={() => logout()}
          label="Sign out"
          variant="raised"
        />
      </View>
      <HomeNavigator />
    </>
  );
}

export default Home;
