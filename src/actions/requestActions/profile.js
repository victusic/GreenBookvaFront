export const getFavorites = async (index) => {
  const products = await fetch(`https://db.greenbookva.shop/favorites/${index}`);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const addFavorites = async (product, account) => {
  const requestData = {
    product_id: product,
    account_id: account,
  };

  const favorites = await fetch(`https://db.greenbookva.shop/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  if (!favorites.ok) {
    throw new Response('', { status: favorites.status, statusText: favorites.statusText });
  }

  return favorites.json();
};

export const delFavorites = async (product, account) => {
  const requestData = {
    product_id: product,
    account_id: account,
  };

  const favorites = await fetch(`https://db.greenbookva.shop/favorites`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  if (!favorites.ok) {
    throw new Response('', { status: favorites.status, statusText: favorites.statusText });
  }

  return favorites.json();
};

export const cleanFavorites = async (index) => {
  const favorites = await fetch(`https://db.greenbookva.shop/favorites/${index}`, { method: 'DELETE' });

  if (!favorites.ok) {
    throw new Response('', { status: favorites.status, statusText: favorites.statusText });
  }

  return favorites.json();
};

export const getOrders = async (index) => {
  const orders = await fetch(`https://db.greenbookva.shop/orders/${index}`);

  if (!orders.ok) {
    throw new Response('', { status: orders.status, statusText: orders.statusText });
  }

  return orders.json();
};

export const getOrder = async (index, profileId) => {
  const order = await fetch(`https://db.greenbookva.shop/order/${index}?profile=${profileId}`);

  if (!order.ok) {
    throw new Response('', { status: order.status, statusText: order.statusText });
  }

  return order.json();
};

export const getShoppingCart = async (index) => {
  const cart = await fetch(`https://db.greenbookva.shop/shopping_cart/${index}`);

  if (!cart.ok) {
    throw new Response('', { status: cart.status, statusText: cart.statusText });
  }

  return cart.json();
};

export const addShoppingCart = async (product, account) => {
  const requestData = {
    product_id: product,
    account_id: account,
  };

  const cart = await fetch(`https://db.greenbookva.shop/shopping_cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  if (!cart.ok) {
    throw new Response('', { status: cart.status, statusText: cart.statusText });
  }

  return cart.json();
};

export const delShoppingCart = async (product, account) => {
  const requestData = {
    product_id: product,
    account_id: account,
  };

  const cart = await fetch(`https://db.greenbookva.shop/shopping_cart`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  if (!cart.ok) {
    throw new Response('', { status: cart.status, statusText: cart.statusText });
  }

  return cart.json();
};

export const cleanShoppingCart = async (index) => {
  const cart = await fetch(`https://db.greenbookva.shop/shopping_cart/${index}`, { method: 'DELETE' });

  if (!cart.ok) {
    throw new Response('', { status: cart.status, statusText: cart.statusText });
  }

  return cart.json();
};

export const getCard = async (index) => {
  const card = await fetch(`https://db.greenbookva.shop/card/${index}`);

  if (!card.ok) {
    throw new Response('', { status: card.status, statusText: card.statusText });
  }

  return card.json();
};

export const patchPoints = async (id, points) => {
  const requestData = {
    points: points,
  };

  const pointsRequest = await fetch(`https://db.greenbookva.shop/profile/${id}/points`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  if (!pointsRequest.ok) {
    throw new Response('', { status: pointsRequest.status, statusText: pointsRequest.statusText });
  }

  return pointsRequest.json();
};
