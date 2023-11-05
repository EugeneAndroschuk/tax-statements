export const getTotalAmountsVat = (vatDeclarations) => {
    let totalRevenue = 0;
    let totalVatPayable = 0;

    for (const item of vatDeclarations) {
        totalRevenue += item.revenue;
        totalVatPayable += item.vatPayable;
    }

    return { totalRevenue, totalVatPayable };

}