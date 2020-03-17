import {StyleSheet, Dimensions} from 'react-native';
import {createAnimationView} from '../../../../components/animations';

export const userConfigStyles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export const ShowText = createAnimationView(
  {
    opacity: {from: 0, to: 1},
    translateX: {from: Dimensions.get('window').width, to: 0},
  },
  ({opacity, translateX}) => ({
    opacity,
    transform: [
      {
        translateX,
      },
    ],
  }),
);
