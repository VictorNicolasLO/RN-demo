/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Animated, Easing} from 'react-native';
import {AnimationProps} from './types';

const FadeInView = (props: AnimationProps) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.duration * 1000,
      delay: props.delay || 0,
      easing: props.easing || Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
