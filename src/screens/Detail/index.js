import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Rating from '../../components/Rating';
import Footer from '../../components/Footer';
import Button from '../../components/Form/Button';

import { matchColorToReviewType } from '../../utils/matchColorToReviewType';

import IconMap from '../../assets/img/icon_map.png';
import IconReport from '../../assets/img/icon_report.png';
import IconShare from '../../assets/img/icon_share.png';

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
                <Title type={ type } />
                <View style={ styles.reviewContainer }>
                    <Image
                        source={{ uri: picture }}
                        style={ styles.image }
                    />
                    <View style={ styles.shareContainer }>
                        <Button
                            action={ (e) => e.preventDefault }
                            icon={ IconShare }
                            type={ type }
                        />
                    </View>
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