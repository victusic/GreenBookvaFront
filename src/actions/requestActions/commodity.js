export const getProductsNew = async () => {
  const products = await fetch('https://db.greenbookva.shop/commodity/product/new');

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductsBestsellers = async () => {
  const products = await fetch('https://db.greenbookva.shop/commodity/product/bestseller');

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductsBest = async () => {
  const products = await fetch('https://db.greenbookva.shop/commodity/product/best');

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductsByCategory = async (index) => {
  const products = await fetch(`https://db.greenbookva.shop/commodity/product?category=${index}`);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductsBySubcategory = async (index) => {
  const products = await fetch(`https://db.greenbookva.shop/commodity/product?subcategory=${index}`);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductsByType = async (index) => {
  const products = await fetch(`https://db.greenbookva.shop/commodity/product/types?type=${index}`);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductsByPromotion = async (index) => {
  const products = await fetch(`https://db.greenbookva.shop/commodity/product?promotion=${index}`);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductsNoPromotion = async (index) => {
  const products = await fetch(`https://db.greenbookva.shop/commodity/product?no_promotion=${index}`);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductsList = async (
  requestType,
  id,
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
  const url = new URL('https://db.greenbookva.shop/commodity/list/product');
  const params = {
    limit: limit,
    page: page,
    min_price: minPrice,
    max_price: maxPrice,
  };

  if (requestType === 'category') {
    params.category = id;
  } else {
    params.subcategory = id;
  }

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

export const getCountProductsList = async (
  requestType,
  id,
  isStock,
  bindings,
  badges,
  autors,
  publishers,
  manufacturers,
  minPrice,
  maxPrice,
) => {
  const url = new URL('https://db.greenbookva.shop/commodity/info/list/product?');

  const params = {
    min_price: minPrice,
    max_price: maxPrice,
  };

  if (requestType === 'category') {
    params.category = id;
  } else {
    params.subcategory = id;
  }

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

export const getInfoProductsList = async (requestType, id, isStock, bindings, minPrice, maxPrice) => {
  const url = new URL('https://db.greenbookva.shop/commodity/info/list/product?');
  const params = {
    min_price: minPrice,
    max_price: maxPrice,
  };

  if (requestType === 'category') {
    params.category = id;
  } else {
    params.subcategory = id;
  }

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

export const getProductsByAuthor = async (index) => {
  const products = await fetch(`https://db.greenbookva.shop/commodity/product?author=${index}`);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductsByManufacturer = async (index) => {
  const products = await fetch(`https://db.greenbookva.shop/commodity/product?manufacturer=${index}`);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductsByPublisher = async (index) => {
  const products = await fetch(`https://db.greenbookva.shop/commodity/product?publisher=${index}`);

  if (!products.ok) {
    throw new Response('', { status: products.status, statusText: products.statusText });
  }

  return products.json();
};

export const getProductOne = async (index) => {
  const product = await fetch(`https://db.greenbookva.shop/commodity/one/product/${index}`);

  if (!product.ok) {
    throw new Response('', { status: product.status, statusText: product.statusText });
  }

  return product.json();
};

export const getProductOneImages = async (index) => {
  const images = await fetch(`https://db.greenbookva.shop/commodity/one/product/${index}/images`);

  if (!images.ok) {
    throw new Response('', { status: images.status, statusText: images.statusText });
  }

  return images.json();
};

export const getProductOneImagesList = async (index) => {
  const images = await fetch(`https://db.greenbookva.shop/commodity/one/product/${index}/images/list`);

  if (!images.ok) {
    throw new Response('', { status: images.status, statusText: images.statusText });
  }

  return images.json();
};

export const getProductOneReviews = async (index) => {
  const reviews = await fetch(`https://db.greenbookva.shop/commodity/one/product/${index}/reviews`);

  if (!reviews.ok) {
    throw new Response('', { status: reviews.status, statusText: reviews.statusText });
  }

  return reviews.json();
};
