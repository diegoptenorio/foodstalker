import React from 'react';
import { 
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { scoreToRating } from './../../utils';

import EmptyStar from '../../assets/img/empty_star.png';
import FullStar from '../../assets/img/full_star.png';

import styles from './styles';

const Rating = ({ score, disabled, size }) => {
    const data = scoreToRating(score);

    return (
        <View>
            <FlatList
                data={ data }
                keyExtractor={ data => data.key }
                 style={ styles.starView }
                 contentContainerStyle={{justifyContent: 'flex-start', flexDirection: 'row'}}
                renderItem={({ item: star }) => (
                    <View style={styles.star}>
                        <TouchableOpacity disabled={ disabled }>
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