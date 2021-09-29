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

const Detail = ({ route }) => {
    const {
        key,
        name,
        picture,
        location,
        autor,
        score
    } = route.params

    return (
        <View style={ styles.detail }>
            <Header isHome={ false } />
            <Image
                source={{ uri: picture }}
                style={ styles.image }
            />
            <View style={{ paddingLeft: 25, paddingRight: 25 }}>
                <Text style={ styles.name }>{name}</Text>
                <Text style={ styles.description }>{`At ${location} - ${autor}`}</Text>
                <Rating
                    score={ score }
                    disabled={ false }
                    size={ 'small' }
                />
                <Button
                    action={ (e) => e.preventDefault }
                    icon={ IconMap }
                    label='See Map'
                    type={ 'Lunch' }
                />
                <Button
                    action={ (e) => e.preventDefault }
                    icon={ IconReport }
                    label='Report Review'
                    type={ 'Lunch' }
                />
            </View>
            <Footer />
        </View>
    )
};

export default Detail;