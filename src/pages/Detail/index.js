import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

import Header from '../../components/Header';
import Rating from '../../components/Rating';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import IconMap from '../../assets/img/icon_map.png';
import IconReport from '../../assets/img/icon_report.png';

import styles from './styles';

const Detail = () => (
    <View style={ styles.detail }>
        <Header />
        <Image
            source={{ uri: 'https://www.diegotenorio.com.br/p/foodstalker/carborana.jpg' }}
            style={ styles.image }
        />
        <Text style={ styles.name }>Carbonara</Text>
        <Text style={ styles.description }>At JO's - Diego Tenório</Text>
        <Rating
            score={ 3 }
            disabled={ false }
            size={ 'small' }
        />
        <Button
            action={ '' }
            icon={ IconMap }
            label='See Map'
            type={ 'Lunch' }
        />
        <Button
            action={''}
            icon={ IconReport }
            label='Report Review'
            type={ 'Lunch' }
        />
        <Footer />
    </View>
);

export default Detail;