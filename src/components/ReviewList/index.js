import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import Review from '../Review';

import { reviewListData } from '../../server/mock/reviewListData';
import { 
    matchColorToReviewType,
    returnReviewMessage
 } from '../../utils';

import IconBreakfast from '../../assets/img/icon_breakfast.png';
import IconLunch from '../../assets/img/icon_lunch.png';
import IconDinnner from '../../assets/img/icon_dinner.png';
import IconReview from '../../assets/img/icon_review.png';

import styles from './styles';

const ReviewList = () => (
    <FlatList
        data={ reviewListData }
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

export default ReviewList;