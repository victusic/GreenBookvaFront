export const getFindProductsList = async (
  findString,
  limit,
  page,
  sort,
  isStock,
  bindings,
  badges,
  autors,
  publishers,
  manufacturers,
  minPrice,
  maxPrice,
) => {
  const url = new URL('https://db.greenbookva.shop/find');
  const params = {
    findstring: findString,
    limit: limit,
    page: page,
    min_price: minPrice,
    max_price: maxPrice,
  };

  if (sort > 0) {
    params.sort = sort;
  }

  if (isStock) {
    params.stock = isStock;
  }

  if (minPrice) {
    params.min_price = minPrice;
  }

  if (maxPrice) {
    params.max_price = maxPrice;
  }

  if (bindings) {
    const joinedBindings = bindings.map(String).join('|');
    params.binding = joinedBindings;
  }

  if (autors) {
    const joinedAutors = autors.map(String).join('|');
    params.author = joinedAutors;
  }

  if (publishers) {
    const joinedPublishers = publishers.map(String).join('|');
    params.publisher = joinedPublishers;
  }

  if (manufacturers) {
    const joinedManufacturers = manufacturers.map(String).join('|');
    params.manufacturer = joinedManufacturers;
  }

  if (badges) {
    const findNovelty = badges.findIndex((item) => item === 0);
    if (findNovelty !== -1) {
      params.novelty = 'true';
    }
    const findDiscount = badges.findIndex((item) => item === 1);
    if (findDiscount !== -1) {
      params.discount = 'true';
    }
    const findSalesLeader = badges.findIndex((item) => item === 2);
    if (findSalesLeader !== -1) {
      params.sales_leader = 'true';
    }
  }

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  const products = await fetch(url);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getFindCountProductsList = async (
  findString,
  isStock,
  bindings,
  badges,
  autors,
  publishers,
  manufacturers,
  minPrice,
  maxPrice,
) => {
  const url = new URL('https://db.greenbookva.shop/find/info');

  const params = {
    findstring: findString,
    min_price: minPrice,
    max_price: maxPrice,
  };

  if (isStock) {
    params.stock = isStock;
  }

  if (bindings) {
    const joinedBindings = bindings.map(String).join('|');
    params.binding = joinedBindings;
  }

  if (autors) {
    const joinedAutors = autors.map(String).join('|');
    params.author = joinedAutors;
  }

  if (publishers) {
    const joinedPublishers = publishers.map(String).join('|');
    params.publisher = joinedPublishers;
  }

  if (manufacturers) {
    const joinedManufacturers = manufacturers.map(String).join('|');
    params.manufacturer = joinedManufacturers;
  }

  if (badges) {
    const findNovelty = badges.findIndex((item) => item === 0);
    if (findNovelty !== -1) {
      params.novelty = 'true';
    }
    const findDiscount = badges.findIndex((item) => item === 1);
    if (findDiscount !== -1) {
      params.discount = 'true';
    }
    const findSalesLeader = badges.findIndex((item) => item === 2);
    if (findSalesLeader !== -1) {
      params.sales_leader = 'true';
    }
  }

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  const products = await fetch(url);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.headers.get('x-total-count');
};

export const getFindInfoProductsList = async (findString, isStock, bindings, minPrice, maxPrice) => {
  const url = new URL('https://db.greenbookva.shop/find/info');
  const params = {
    findstring: findString,
    min_price: minPrice,
    max_price: maxPrice,
  };

  if (isStock) {
    params.stock = isStock;
  }

  if (bindings) {
    const joinedBindings = bindings.map(String).join('|');
    params.binding = joinedBindings;
  }

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  const productsInfo = await fetch(url);

  if (!productsInfo.ok) {
    throw new Response('', { status: productsInfo.status, statusText: productsInfo.statusText });
  }

  return productsInfo.json();
};
