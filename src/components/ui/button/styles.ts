import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  outlined: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  filled: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
  },
  raised: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export const textStyles = StyleSheet.create({
  outlined: {
    color: '#737373',
    fontSize: 18,
    textAlign: 'center',
  },

  filled: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  raised: {
    color: '#737373',
    fontSize: 18,
    textAlign: 'center',
  },
});
