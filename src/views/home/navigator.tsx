import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeView from './views/home-view';
import UserConfig from './views/user-config';

const Tab = createBottomTabNavigator();
function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={
        {
          /*unmountOnBlur: true,*/
          /*tabBarVisible: false*/
        }
      }>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Config" component={UserConfig} />
    </Tab.Navigator>
  );
}

export default HomeNavigator;
