import { COLOR_SCHEME } from '../constants';

export const matchColorToReviewType = (type) => {
    switch (type) {
        case 'Dinner':
            return COLOR_SCHEME.DINNER
        case 'Lunch':
            return COLOR_SCHEME.LUNCH
        case 'Breakfast':
            return COLOR_SCHEME.BREAKFAST
    }
}