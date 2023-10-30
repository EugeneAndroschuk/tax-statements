export const getTaxLoad = (reveneu, vatPayable) => {
    return vatPayable * 100 / reveneu;
}