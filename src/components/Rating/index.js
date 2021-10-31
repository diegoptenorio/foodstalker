import React, { useState } from 'react';
import { 
    FlatList,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

import { scoreToRating } from './../../utils';

import EmptyStar from '../../assets/img/empty_star.png';
import FullStar from '../../assets/img/full_star.png';

import styles from './styles';

const Rating = ({ disabled, score, size }) => {
    const [newScore, setNewScore] = useState(scoreToRating(score));

    const handleScore = value => {
        setNewScore(scoreToRating(value));
    };

    return (
        <View>
            <FlatList
                data={ newScore }
                keyExtractor={ data => data.key }
                 style={ size === 'large' ? styles.starViewLarge : styles.starView }
                 contentContainerStyle={{justifyContent: 'flex-start', flexDirection: 'row'}}
                renderItem={({ item: star, index }) => (
                    <View style={styles.star}>
                        <TouchableOpacity
                            onPress={() => handleScore(index + 1)}
                            disabled={ disabled }
                        >
                            { star.score &&
                                <Image source={ FullStar } />
                            }
                            { !star.score &&
                                <Image source={ EmptyStar } />
                            }
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
};

export default Rating;