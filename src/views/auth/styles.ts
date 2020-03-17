import {StyleSheet} from 'react-native';
import {createAnimationView} from '../../components/animations';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: 'white',
  },
  topContent: {
    flexGrow: 3.5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomControls: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    paddingTop: 20,
    transform: [{translateY: -60}],
  },
  buttonStyle: {
    fontSize: 20,
    paddingHorizontal: 100,
    paddingVertical: 15,
    minWidth: 300,
  },
  showButton: {
    display: 'flex',
    marginVertical: 12,
  },
  appPresentation: {
    marginBottom: 50,
  },
});

export const ShowTitle = createAnimationView(
  {opacity: {from: 0, to: 1}, translateY: {from: 10, to: 0}},
  ({opacity, translateY}) => ({
    opacity,
    transform: [{translateY}],
  }),
);

export const ShowButtons = createAnimationView(
  {translateY: {from: 40, to: 0}, opacity: {from: 0, to: 1}},
  ({translateY, opacity}) => ({
    opacity,
    translateY,
  }),
);
