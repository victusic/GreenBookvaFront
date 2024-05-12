const defaultState = {
  sortProducts: [
    { name: '12', value: 12 },
    { name: '24', value: 24 },
    { name: '36', value: 36 },
    { name: '48', value: 48 },
  ],
  countProducts: [
    { name: 'По умолчанию', value: 0 },
    { name: 'По возрастанию', value: 1 },
    { name: 'По убыванию', value: 2 },
    { name: 'Сначала новые', value: 3 },
    { name: 'Сначала старые', value: 4 },
    { name: 'Сначала бюджетные', value: 5 },
    { name: 'Сначала премиальные', value: 6 },
  ],
  sortOrders: [
    { name: 'Сначала ранние', value: 0 },
    { name: 'Сначала поздние', value: 1 },
    { name: 'Сначала дешевле', value: 2 },
    { name: 'Сначала дороже', value: 3 },
  ],
};

export const sortReducer = (state = defaultState) => {
  return state;
};
