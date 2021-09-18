export const scoreToRating = (score) => {
    const maxScore = 5;
    let rating = [];
    for (let i = 1; i <= maxScore; i++) {
        rating.push({ key: i.toString(), score: i <= score ? true : false })
    };
    return rating;
}