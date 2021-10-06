import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

import Header from '../../components/Header';
import ReviewType from '../../components/ReviewType';
import Rating from '../../components/Rating';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import { matchColorToReviewType } from '../../utils/matchColorToReviewType';

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
    } = route.params.review;

    const { type } = route.params;

    return (
        <View style={ styles.detail }>
            <Header isHome={ false } />
            <View style={{ backgroundColor: matchColorToReviewType(type), flex: 1 }}>
                <ReviewType type={ type } />
                <Image
                    source={{ uri: picture }}
                    style={ styles.image }
                />
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.20)', flex: 1 }}>
                    <View style={ styles.descContainer }>
                        <View style={ styles.infoContainer }>
                            <Text style={ styles.name }>{name}</Text>
                            <Text style={ styles.description }>{`At ${location} - ${autor}`}</Text>
                            <Rating
                                score={ score }
                                disabled={ true }
                                size={ 'small' }
                            />
                        </View>
                        <Button
                            action={ (e) => e.preventDefault }
                            icon={ IconMap }
                            label='See Map'
                            type={ type }
                        />
                        <Button
                            action={ (e) => e.preventDefault }
                            icon={ IconReport }
                            label='Report Review'
                            type={ type }
                        />
                    </View>
                </View>
            </View>
            <Footer />
        </View>
    )
};

export default Detail;