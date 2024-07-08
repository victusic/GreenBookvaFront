import { ReviewDTO } from '../types/requestActions';
import { AnyResponse } from '../types/types';

export const getReview = async (index: number): Promise<AnyResponse<ReviewDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/review/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const addReview = async (
  product: number,
  account: number,
  header: string,
  review: string,
  rate: number,
): Promise<AnyResponse<ReviewDTO>> => {
  const requestData: { [key: string]: string | number } = {
    productId: product,
    accountId: account,
    header,
    reviewText: review,
    evaluation: rate,
  };

  try {
    const resp = await fetch(`https://db.greenbookva.shop/review `, {
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

export const updateReview = async (
  id: number,
  header: string,
  review: string,
  rate: number,
): Promise<AnyResponse<ReviewDTO>> => {
  const requestData: { [key: string]: string | number } = {
    header,
    reviewText: review,
    evaluation: rate,
  };

  try {
    const resp = await fetch(`https://db.greenbookva.shop/review/${id}`, {
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

export const delReview = async (index: number): Promise<AnyResponse<unknown>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/review/${index}`, { method: 'DELETE' });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
