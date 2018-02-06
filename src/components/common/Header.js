import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.heading}</Text>
    </View>
  );
}

const styles = {
  textStyle: {
    fontSize: 24,
    color: '#FAFAFA',
  },
  viewStyle: {
    backgroundColor: '#1A237E',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    paddingTop: 16,
    shadowColor: '#00004B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
}

export { Header };
