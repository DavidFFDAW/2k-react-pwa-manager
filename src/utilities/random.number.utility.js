// getRandomNumber(min, max)
// Returns a random number between min (inclusive) and max (exclusive)

export const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
};

export const getTwitterRandomNumber = () => {
    return Math.floor(getRandomNumber(100, 20500));
};
