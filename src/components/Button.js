import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
const { buttonStyles, textStyles } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}> 
            {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        borderColor: '#007aff',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
    },

    textStyles: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#007aff',
        paddingTop: 10,
        paddingBottom: 10,
    },
};

export default Button;