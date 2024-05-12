export const fetchStocks = () => {
  return function (dispatchStocks) {
    fetch('https://db.green-bookva.shop/promotions')
      .then((response) => response.json())
      // eslint-disable-next-line no-undef
      .then((json) => dispatchStocks(refreshStocksList(json)));
  };
};
