export const getTaxLoad = (reveneu, vatPayable) => {
    const taxLoad = (vatPayable * 100) / reveneu;
    return taxLoad.toFixed(2);
    // return taxLoad;
}