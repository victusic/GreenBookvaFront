import { useSelector } from 'react-redux';
import { OrderDTO, OrderProductDTO, ProductDTO, ProfileSystemDataDTO } from '../types/requestActions';
import { AnyResponse } from '../types/types';
import { RootState } from '../../store';

export const getFavorites = async (index: number): Promise<AnyResponse<ProductDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}favorites/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const addFavorites = async (
  product: number,
  account: number,
): Promise<AnyResponse<ProfileSystemDataDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const requestData: { [key: string]: string | number } = {
    productId: product,
    accountId: account,
  };

  try {
    const resp = await fetch(`${apiUrl}favorites`, {
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
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const requestData: { [key: string]: string | number } = {
    productId: product,
    accountId: account,
  };

  try {
    const resp = await fetch(`${apiUrl}favorites`, {
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
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}favorites/${index}`, { method: 'DELETE' });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getOrders = async (index: number): Promise<AnyResponse<OrderDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}orders/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getOrder = async (index: number, profileId: number): Promise<AnyResponse<OrderProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}order/${index}?profile=${profileId}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getShoppingCart = async (index: number): Promise<AnyResponse<ProductDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}shopping_cart/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const addShoppingCart = async (
  product: number,
  account: number,
): Promise<AnyResponse<ProfileSystemDataDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const requestData: { [key: string]: string | number } = {
    productId: product,
    accountId: account,
  };

  try {
    const resp = await fetch(`${apiUrl}shopping_cart`, {
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
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const requestData: { [key: string]: string | number } = {
    productId: product,
    accountId: account,
  };

  try {
    const resp = await fetch(`${apiUrl}shopping_cart`, {
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
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}shopping_cart/${index}`, { method: 'DELETE' });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getCard = async (index: number) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}card/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const patchPoints = async (id: number, points: number) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const requestData: { [key: string]: string | number } = {
    points,
  };

  try {
    const resp = await fetch(`${apiUrl}profile/${id}/points`, {
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
