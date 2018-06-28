import React from 'react';
import { Text, View } from 'react-native';


// Header component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
    return ( 
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#000000'
  }
};

// Make the component available to other

export default Header;
