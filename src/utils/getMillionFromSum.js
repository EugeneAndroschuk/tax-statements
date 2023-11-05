export const getMillionFromSum = (sum) => {
    const million = sum / 1000000;

    return million.toFixed(3);
}