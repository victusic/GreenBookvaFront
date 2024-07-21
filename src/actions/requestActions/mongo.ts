import { useSelector } from 'react-redux';
import { PhraseDTO, PromocodeDTO } from '../types/requestActions';
import { AnyResponse } from '../types/types';
import { RootState } from '../../store';

export const getPromocode = async (code: string): Promise<AnyResponse<PromocodeDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}promo?code=${code}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPhrases = async (code: string): Promise<AnyResponse<PhraseDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}phrases?code=${code}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
