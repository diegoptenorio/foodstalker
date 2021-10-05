import React from 'react';

import IconAlert from '../../../assets/img/icon_alert.png';
import { Button, Image, Text, View  } from 'react-native';

import styles from './styles';

const Error = ({ fetchReviews }) => {
    return (
        <View style={ styles.container }>
            <Image source={ IconAlert } />
            <Text style={ styles.message }>Sorry, Something went wrong</Text>
            <Button title='Try Again' onPress={() => fetchReviews()} />
        </View>
    )
};

export default Error;