
export const fetchStocks = () => {
    return function (dispatchStocks){
        fetch('https://db.green-bookva.shop/promotions')
            .then(response => response.json())
            .then(json => dispatchStocks(refreshStocksList(json)))            
    }
}