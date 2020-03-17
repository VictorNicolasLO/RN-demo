import React, {useState} from 'react';
import {Animated, Easing, ViewStyle} from 'react-native';
import {AnimationProps} from './types';

export const createAnimationView = (
  stylesValues: any,
  interpolateStyles: (animatedValues: any) => ViewStyle,
) => {
  const initAnimationValues = () => {
    const animatedValuesInit: any = {};

    Object.keys(stylesValues).forEach((key: string) => {
      animatedValuesInit[key] = new Animated.Value(stylesValues[key].from);
    });
    return animatedValuesInit;
  };

  const AnimationComponent = (props: AnimationProps) => {
    const [animatedValues] = useState(initAnimationValues()); // Initial value for opacity: 0

    React.useEffect(() => {
      Object.keys(animatedValues).forEach((key: string) => {
        Animated.timing(animatedValues[key], {
          useNativeDriver: true,
          toValue: stylesValues[key].to,
          duration: props.duration * 1000,
          delay: (props.delay || 0) * 1000,
          easing: props.easing || Easing.out(Easing.ease),
        }).start();
      });
    }, [animatedValues, props.delay, props.duration, props.easing]);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          ...interpolateStyles(animatedValues), // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };
  return AnimationComponent;
};
