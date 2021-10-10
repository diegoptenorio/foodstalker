import React, { useState } from 'react';
import { TextInput } from 'react-native';

const Input = ({ placeholder }) => {
    const [value, onChangeValue] = useState('');

    return (
        <TextInput
            onChangeText={ onChangeValue }
            value={ value }
            placeholder={ placeholder }
        />
    )
}

export default Input;