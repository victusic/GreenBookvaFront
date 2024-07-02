import { PhraseDTO, PromocodeDTO } from '../types/requestActions';
import { AnyResponse } from '../types/types';

export const getPromocode = async (code: string): Promise<AnyResponse<PromocodeDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/promo?code=${code}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPhrases = async (code: string): Promise<AnyResponse<PhraseDTO[]>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/phrases?code=${code}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
