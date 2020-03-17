import React from 'react';
import {TextInput, View, TextInputProps} from 'react-native';
import {textFieldStyle} from './style';
import Typography from '../typography';

interface Props extends TextInputProps {
  label: string;
}

function TextField(props: Props) {
  return (
    <View>
      <Typography style={textFieldStyle.label} variant="body1">
        {props.label}
      </Typography>
      <TextInput {...props} style={textFieldStyle.input} />
    </View>
  );
}

export default TextField;
