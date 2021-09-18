import { EN } from '../constants';

export const returnReviewMessage = (reviewQuantity) => {
    if (reviewQuantity === 0) return EN.NO_REVIEW;
    else if (reviewQuantity === 1) return `${reviewQuantity} ${EN.REVIEW}`;
    else return `${reviewQuantity} ${EN.REVIEWS}`;
};