import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import Review from '../Review';

import api from '../../services/api';

import { 
    matchColorToReviewType,
    returnReviewMessage
 } from '../../utils';

import IconBreakfast from '../../assets/img/icon_breakfast.png';
import IconLunch from '../../assets/img/icon_lunch.png';
import IconDinnner from '../../assets/img/icon_dinner.png';
import IconReview from '../../assets/img/icon_review.png';

import styles from './styles';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        api('/reviews', )
        .then(function(response) {
            setReviews(response.data.review.data)
        })
        .catch(function(e) {})
        .then(function() {});
    }, []);

    return (
        <FlatList
            data={ reviews }
            keyExtractor={ review => review.type }
            renderItem={({ item: review }) => (  
                <View style={{ backgroundColor: matchColorToReviewType(review.type) }}>
                    <View style={ styles.listHeader }>
                        <View style={ styles.reviewType }>
                            <Image
                                source={ 
                                    review.type === 'Breakfast' ?
                                        IconBreakfast
                                    :
                                    review.type === 'Lunch' ?
                                        IconLunch
                                    :
                                        IconDinnner   
                                }
                                style={ styles.icon }
                            />
                            <Text style={ styles.listHeaderTitle }>{ review.type }</Text>
                        </View>
                        <View style={ styles.reviewQuantity }>
                            <Image
                                source={ IconReview }
                                style={ styles.icon }
                            />
                            <Text style={ styles.listHeaderTitle }>{ returnReviewMessage(review.content.length) }</Text>
                        </View>
                    </View>
                    <Review data={review} />
                </View>
            )}
            showsVerticalScrollIndicator={ false }
            style={{ backgroundColor: '#ddd' }}
        />
    )
};

export default ReviewList;