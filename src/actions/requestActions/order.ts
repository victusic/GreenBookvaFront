import { OrderDTO, ProductDTO } from '../types/requestActions';
import { AnyResponse } from '../types/types';

export const sendOrder = async (
  product: number,
  account: number,
  date: string,
  code: number,
): Promise<AnyResponse<OrderDTO>> => {
  const requestData = {
    productId: product,
    accountId: account,
    orderDate: date,
    orderCode: code,
  };

  try {
    const resp = await fetch(`https://db.greenbookva.shop/order`, {
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

export const newProductCount = async (index: number): Promise<AnyResponse<ProductDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/order/product/count/${index}`, {
      method: 'PATCH',
    });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
