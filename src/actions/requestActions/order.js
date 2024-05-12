export const sendOrder = async (product, account, date, code) => {
  const requestData = {
    product_id: product,
    account_id: account,
    order_date: date,
    order_code: code,
  };

  const order = await fetch(`https://db.greenbookva.shop/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  if (!order.ok) {
    throw new Response('', { status: order.status, statusText: order.statusText });
  }

  return order.json();
};

export const newProductCount = async (index) => {
  const product = await fetch(`https://db.greenbookva.shop/order/product/count/${index}`, {
    method: 'PATCH',
  });

  if (!product.ok) {
    throw new Response('', { status: product.status, statusText: product.statusText });
  }

  return product.json();
};
