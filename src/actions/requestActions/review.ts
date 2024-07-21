import { useSelector } from 'react-redux';
import { ReviewDTO } from '../types/requestActions';
import { AnyResponse } from '../types/types';
import { RootState } from '../../store';

export const getReview = async (index: number): Promise<AnyResponse<ReviewDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}review/${index}`);
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
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const requestData: { [key: string]: string | number } = {
    productId: product,
    accountId: account,
    header,
    reviewText: review,
    evaluation: rate,
  };

  try {
    const resp = await fetch(`${apiUrl}review `, {
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
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const requestData: { [key: string]: string | number } = {
    header,
    reviewText: review,
    evaluation: rate,
  };

  try {
    const resp = await fetch(`${apiUrl}review/${id}`, {
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
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}review/${index}`, { method: 'DELETE' });
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
