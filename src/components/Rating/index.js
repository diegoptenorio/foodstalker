import React from 'react';
import { 
    FlatList,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

import EmptyStar from '../../assets/img/empty_star.png';
import FullStar from '../../assets/img/full_star.png';

import styles from './styles';

const Rating = ({ data, disabled, size }) => (
    <View>
        <FlatList
            data={ data }
            keyExtractor={ data => data.key }
            renderItem={({ item: star }) => (
                <View style={ styles.star }>
                    { star.score &&
                        <TouchableOpacity
                            disabled={ disabled }
                        >
                            <Image source={ FullStar } />
                        </TouchableOpacity>
                    }
                    { !star.score &&
                        <TouchableOpacity
                            disabled={ disabled }
                        >
                            <Image source={ EmptyStar } />
                        </TouchableOpacity>
                    }
                </View>
            )}
            style={ styles.ratingList }
        />
    </View>
);

export default Rating;