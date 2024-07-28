import { PhraseDTO, PromocodeDTO } from '../types/requestActions';
import { AnyResponse, apiUrl } from '../types/types';

export const getPromocode = async (code: string): Promise<AnyResponse<PromocodeDTO>> => {
  try {
    const resp = await fetch(`${apiUrl}promo?code=${code}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPhrases = async (code: string): Promise<AnyResponse<PhraseDTO[]>> => {
  try {
    const resp = await fetch(`${apiUrl}phrases?code=${code}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
