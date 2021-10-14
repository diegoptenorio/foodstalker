import React, { useState } from 'react';

import { TextInput } from 'react-native';

import { COLOR_SCHEME } from '../../../constants';

import styles from './styles';

const Input = ({ placeholder }) => {
    const [value, onChangeValue] = useState('');

    return (
        <TextInput
            onChangeText={ onChangeValue }
            value={ value }
            placeholder={ placeholder }
            placeholderTextColor={ COLOR_SCHEME.ACTION } 
            style={ styles.textInput }
        />
    )
}

export default Input;