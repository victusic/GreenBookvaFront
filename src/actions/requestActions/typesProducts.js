export const getCategories = async (index) => {
  const categories = await fetch(`https://db.greenbookva.shop/category?type=${index}`);

  if (!categories.ok) {
    throw new Response('', { status: categories.status, statusText: categories.statusText });
  }

  return categories.json();
};

export const getSubcategories = async (index) => {
  const subcategories = await fetch(`https://db.greenbookva.shop/subcategory?category=${index}`);

  if (!subcategories.ok) {
    throw new Response('', { status: subcategories.status, statusText: subcategories.statusText });
  }

  return subcategories.json();
};

export const getTypeName = async (index) => {
  const types = await fetch(`https://db.greenbookva.shop/type/name?type=${index}`);

  if (!types.ok) {
    throw new Response('', { status: types.status, statusText: types.statusText });
  }

  return types.json();
};
export const getCategoryName = async (index) => {
  const categories = await fetch(`https://db.greenbookva.shop/category/name?category=${index}`);

  if (!categories.ok) {
    throw new Response('', { status: categories.status, statusText: categories.statusText });
  }

  return categories.json();
};

export const getSubcategoryName = async (index) => {
  const subcategories = await fetch(`https://db.greenbookva.shop/subcategory/name?subcategory=${index}`);

  if (!subcategories.ok) {
    throw new Response('', { status: subcategories.status, statusText: subcategories.statusText });
  }

  return subcategories.json();
};

export const getTypeByCategory = async (index) => {
  const type = await fetch(`https://db.greenbookva.shop/type/category/name?category=${index}`);

  if (!type.ok) {
    throw new Response('', { status: type.status, statusText: type.statusText });
  }

  return type.json();
};

export const getTypeBySubcategory = async (index) => {
  const type = await fetch(`https://db.greenbookva.shop/type/subcategory/name?subcategory=${index}`);

  if (!type.ok) {
    throw new Response('', { status: type.status, statusText: type.statusText });
  }

  return type.json();
};

export const getCategoryBySubcategory = async (index) => {
  const category = await fetch(`https://db.greenbookva.shop/category/subcategory/name?subcategory=${index}`);

  if (!category.ok) {
    throw new Response('', { status: category.status, statusText: category.statusText });
  }

  return category.json();
};

export const getTypeByProduct = async (index) => {
  const type = await fetch(`https://db.greenbookva.shop/type/product?product=${index}`);

  if (!type.ok) {
    throw new Response('', { status: type.status, statusText: type.statusText });
  }

  return type.json();
};

export const getCategoryByProduct = async (index) => {
  const category = await fetch(`https://db.greenbookva.shop/category/product?product=${index}`);

  if (!category.ok) {
    throw new Response('', { status: category.status, statusText: category.statusText });
  }

  return category.json();
};

export const getSubcategoryByProduct = async (index) => {
  const subcategory = await fetch(`https://db.greenbookva.shop/subcategory/product?product=${index}`);

  if (!subcategory.ok) {
    throw new Response('', { status: subcategory.status, statusText: subcategory.statusText });
  }

  return subcategory.json();
};
