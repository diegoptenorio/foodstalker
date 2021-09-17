import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { reviewListData } from '../../server/mock/reviewListData';
import { matchColorToReviewType } from '../../utils/matchColorToReviewType';

import styles from './styles';

const ReviewList = () => (
    <FlatList
        data={reviewListData}
        keyExtractor={review => review.type}
        renderItem={({ item: review }) => (         
            <View style={{ backgroundColor: matchColorToReviewType(review.type) }}>
                <View style={styles.listHeader}>        
                    <Text style={styles.listHeaderTitle}>{review.type}</Text>
                    <Text style={styles.listHeaderTitle}>{`${review.content.length} Review`}</Text>
                </View>
            </View>
        )}
        showsVerticalScrollIndicator={false}
    />
)

export default ReviewList;