import { OrderDTO, OrderProductDTO, ProductDTO, ProfileSystemDataDTO } from '../types/requestActions';
import { AnyResponse } from '../types/types';

export const getFavorites = async (index: number): Promise<AnyResponse<ProductDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/favorites/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const addFavorites = async (
  product: number,
  account: number,
): Promise<AnyResponse<ProfileSystemDataDTO>> => {
  const requestData: { [key: string]: string | number } = {
    productId: product,
    accountId: account,
  };

  try {
    const resp = await fetch(`https://db.greenbookva.shop/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const delFavorites = async (
  product: number,
  account: number,
): Promise<AnyResponse<ProfileSystemDataDTO>> => {
  const requestData: { [key: string]: string | number } = {
    productId: product,
    accountId: account,
  };

  try {
    const resp = await fetch(`https://db.greenbookva.shop/favorites`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const cleanFavorites = async (index: number): Promise<AnyResponse<ProfileSystemDataDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/favorites/${index}`, { method: 'DELETE' });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getOrders = async (index: number): Promise<AnyResponse<OrderDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/orders/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getOrder = async (index: number, profileId: number): Promise<AnyResponse<OrderProductDTO[]>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/order/${index}?profile=${profileId}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getShoppingCart = async (index: number): Promise<AnyResponse<ProductDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/shopping_cart/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const addShoppingCart = async (
  product: number,
  account: number,
): Promise<AnyResponse<ProfileSystemDataDTO>> => {
  const requestData: { [key: string]: string | number } = {
    productId: product,
    accountId: account,
  };

  try {
    const resp = await fetch(`https://db.greenbookva.shop/shopping_cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const delShoppingCart = async (
  product: number,
  account: number,
): Promise<AnyResponse<ProfileSystemDataDTO>> => {
  const requestData: { [key: string]: string | number } = {
    productId: product,
    accountId: account,
  };

  try {
    const resp = await fetch(`https://db.greenbookva.shop/shopping_cart`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const cleanShoppingCart = async (index: number): Promise<AnyResponse<ProfileSystemDataDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/shopping_cart/${index}`, { method: 'DELETE' });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getCard = async (index: number) => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/card/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const patchPoints = async (id: number, points: number) => {
  const requestData: { [key: string]: string | number } = {
    points,
  };

  try {
    const resp = await fetch(`https://db.greenbookva.shop/profile/${id}/points`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
