export const getMonthAndYear = (date) => {
    const initDate = new Date(date);

    const month = initDate.toLocaleString('en', { month: 'long' });
    const year = initDate.getUTCFullYear();

    return month + " " + year;
}