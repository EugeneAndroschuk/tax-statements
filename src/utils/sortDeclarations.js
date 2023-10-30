export const groupDeclarationsByPeriod = (arr) => {
  let declarationsInCurrentDate = [];
  let result = [];
  let period = arr[0].period;

  for (let i = 0; i < arr.length; i++) {
    declarationsInCurrentDate.push({
      id: arr[i]._id,
      company: arr[i].company.name,
      revenue: arr[i].revenue,
      vatPayable: arr[i].vatPayable,
    });

    if (i === arr.length - 1) result.push({ period, declarations: declarationsInCurrentDate }); else

    if (period !== arr[i+1].period) {
      result.push({ period, declarations: declarationsInCurrentDate });
      period = arr[i+1].period;
      declarationsInCurrentDate = [];
    }
  }
  return result;
};
