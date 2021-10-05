import React from 'react';

import IconInfo from '../../../assets/img/icon_info.png';
import { Button, Image, Text, View  } from 'react-native';

import styles from './styles';

const NoContent = ({ fetchReviews }) => {
    return (
        <View style={ styles.container }>
            <Image source={ IconInfo } />
            <Text style={ styles.message }>No Content</Text>
            <Button title='Try Again' onPress={() => fetchReviews()} />
        </View>
    )
};

export default NoContent;