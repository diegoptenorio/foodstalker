import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { EN } from '../../constants';

import { useNavigation } from '@react-navigation/core';

import Rating from '../Rating';

import styles from './styles';

const Review = ({ data }) => {
    const navigation = useNavigation();

    const goTo = (component) => {
        if (component) navigation.navigate(component);
        else  navigation.navigate.goBack();
    };
    
    return (
        <FlatList
            data={ data.content }
            keyExtractor={ review => review.key }
            renderItem={({ item: review, index }) => (
                <TouchableOpacity
                    onPress={() => goTo('Detail') }
                    style={{ 
                        flexDirection: 'row',
                        paddingVertical: 15,
                        backgroundColor: index % 2 ? 'transparent' : 'rgba(0, 0, 0, 0.20)'
                    }}
                >
                    <View style={ styles.imgContainer }>
                        <Image
                            source={{ uri: review.picture }}
                            style={ styles.img }
                        />
                    </View>
                    <View style={ styles.descriptionContainer }>
                        <Text style={ styles.descriptionName }>{ review.name }</Text>
                        <Text style={ styles.descriptionLocation }>{ `${EN.AT} ${review.location}` }</Text>
                        <Rating
                            score={ review.score }
                            disabled={ true }
                            size={ 'small' }
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
};

export default Review;