import React from 'react';

import {
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

import { matchColorToReviewType } from '../../utils';
import styles from './styles';

const Button = ({ action, icon, label, type  }) => (
    <TouchableOpacity
        onPress={ action }
        style={{ 
            backgroundColor: matchColorToReviewType(type),
            borderRadius: 25,
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
            padding: 12
        }}
    >
        <Image
            source={ icon }
            style={ styles.icon }
        />
        <Text style={ styles.label }>{ label }</Text>
    </TouchableOpacity>
);

export default Button;