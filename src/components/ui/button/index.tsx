import React from 'react';
import {TouchableOpacity, Text, View, ViewProps, TextProps} from 'react-native';
import {styles, textStyles} from './styles';
import {useThemeProvider} from '../../../providers/theme-provider';
interface Props extends ViewProps {
  variant: 'outlined' | 'filled' | 'raised';
  label: string;
  textProps?: TextProps;
  onPress: () => void;
}

function Button(props: Props) {
  const {
    theme: {
      colors: {primary: primaryColor},
    },
  } = useThemeProvider();

  const background = props.variant === 'filled' ? primaryColor : 'white';

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
      <View
        {...props}
        style={[
          styles[props.variant],
          {backgroundColor: background},
          ,
          props.style,
        ]}>
        <Text
          {...props.textProps}
          style={[
            textStyles[props.variant],
            {fontSize: (props as any).style?.fontSize},
            props.textProps?.style,
          ]}>
          {props.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
