import React from 'react';
import {Text, TextStyle, StyleSheet, TextProps} from 'react-native';

interface Props extends TextProps {
  variant: 'body1' | 'body2' | 'title1' | 'title2';
  children: any;
  color?: string;
  align?: 'center' | 'left' | 'right' | 'auto' | 'justify';
}

const styles = StyleSheet.create({
  body1: {fontSize: 18},
  body2: {fontSize: 15},
  title1: {fontSize: 50},
  title2: {fontSize: 32},
});

function Typography(props: Props) {
  const {variant, children, color} = props;
  return (
    <Text
      {...props}
      style={[
        styles[variant],
        {color: color || '#535a60', textAlign: props.align},
        props.style,
      ]}>
      {children}
    </Text>
  );
}

export default Typography;
