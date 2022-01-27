export const getById = <T extends { id: number }>(list: T[]) => {
  return list.reduce((res, curr) => {
    res[curr.id] = curr;
    return res;
  }, {} as Record<number, T>);
};
