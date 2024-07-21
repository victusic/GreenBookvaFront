import { useSelector } from 'react-redux';
import { OrderDTO, ProductDTO } from '../types/requestActions';
import { AnyResponse } from '../types/types';
import { RootState } from '../../store';

export const sendOrder = async (
  product: number,
  account: number,
  date: string,
  code: number,
): Promise<AnyResponse<OrderDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const requestData = {
    productId: product,
    accountId: account,
    orderDate: date,
    orderCode: code,
  };

  try {
    const resp = await fetch(`${apiUrl}order`, {
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
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}order/product/count/${index}`, {
      method: 'PATCH',
    });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
