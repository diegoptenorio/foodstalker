import React from 'react';
import { Image, Text, View } from 'react-native';

import { returnReviewMessage } from '../../utils';

import IconBreakfast from '../../assets/img/icon_breakfast.png';
import IconLunch from '../../assets/img/icon_lunch.png';
import IconDinnner from '../../assets/img/icon_dinner.png';
import IconReview from '../../assets/img/icon_review.png';

import styles from './styles';

const Title = ({ type, length = false }) => {
    return (
        <View>
            { length === false &&
                <View style={ styles.listHeader }>
                    <View style={ styles.reviewTypeCenter }>
                        <Image
                            source={ 
                                type === 'Breakfast' ?
                                    IconBreakfast
                                :
                                type === 'Lunch' ?
                                    IconLunch
                                :
                                    IconDinnner   
                            }
                            style={ styles.icon }
                        />
                        <Text style={ styles.listHeaderTitle }>{ type }</Text>
                    </View>
                </View>
            }
            { !length === false &&
                <View style={ styles.listHeader }>
                    <View style={ styles.reviewType }>
                        <Image
                            source={ 
                                type === 'Breakfast' ?
                                    IconBreakfast
                                :
                                type === 'Lunch' ?
                                    IconLunch
                                :
                                    IconDinnner   
                            }
                            style={ styles.icon }
                        />
                        <Text style={ styles.listHeaderTitle }>{ type }</Text>
                    </View>
                    <View style={ styles.reviewQuantity }>
                        <Image
                            source={ IconReview }
                            style={ styles.icon }
                        />
                        <Text style={ styles.listHeaderTitle }>{ returnReviewMessage(length) }</Text>
                    </View>
                </View>
            }
        </View>
    )
};

export default Title;