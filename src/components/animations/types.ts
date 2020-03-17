import {ViewStyle} from 'react-native';

export type AnimationProps = {
  duration: number;
  delay?: number;
  children: any;
  style?: ViewStyle;
  easing?: (value: number) => number;
};
