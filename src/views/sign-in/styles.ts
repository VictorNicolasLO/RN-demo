import {StyleSheet} from 'react-native';
import {createAnimationView} from '../../components/animations';

export const styles = StyleSheet.create({
  SignInContainer: {
    padding: 20,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  ShowFormsView: {
    margin: 20,
  },
  button: {
    fontSize: 20,
    paddingHorizontal: 100,
    paddingVertical: 15,
    minWidth: 300,
  },
  loadingContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export const ShowButtonView = createAnimationView(
  {opacity: {from: 0, to: 1}, scale: {from: 0.9, to: 1}},
  ({opacity, scale}) => ({
    opacity,
    transform: [{scale}],
  }),
);

export const ShowFormsView = createAnimationView(
  {opacity: {from: 0, to: 1}, translateY: {from: 20, to: 0}},
  ({opacity, translateY}) => ({
    opacity,
    transform: [{translateY}],
  }),
);
