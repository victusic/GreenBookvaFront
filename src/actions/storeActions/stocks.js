export const fetchStocks = () => {
  return function (dispatchStocks) {
    fetch('https://db.greenbookva.shop/promotions')
      .then((response) => response.json())
      // eslint-disable-next-line no-undef
      .then((json) => dispatchStocks(refreshStocksList(json)));
  };
};
