import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const Review = ({ data }) => (
    <FlatList
        data={ data.content }
        keyExtractor={ review => review.key }
        renderItem={({ item: review, index }) => (
            <TouchableOpacity
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
                    <Text style={ styles.descriptionLocation }>{ review.location }</Text>
                    <Text>{ review.score }</Text>
                </View>
            </TouchableOpacity>
        )}
    />
);

export default Review;