export const returnReviewMessage = (reviewQuantity) => {
    if (reviewQuantity === 0) return 'No Review';
    else if (reviewQuantity === 1) return `${reviewQuantity} Review`;
    else return `${reviewQuantity} Reviews`;
}