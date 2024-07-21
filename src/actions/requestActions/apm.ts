import { useSelector } from 'react-redux';
import {
  AuthorDTO,
  AuthorImagesDTO,
  ManufacturerDTO,
  PublisherDTO,
  SlidesDTO,
} from '../types/requestActions';
import { AnyResponse } from '../types/types';
import { RootState } from '../../store';

export const getAuthor = async (index): Promise<AnyResponse<AuthorDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}author/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getAuthorSlides = async (index): Promise<AnyResponse<SlidesDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}author/${index}/slides`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getAuthorImages = async (index): Promise<AnyResponse<AuthorImagesDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}author/${index}/images`);

    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPublisher = async (index): Promise<AnyResponse<PublisherDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}publisher/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPublisherSlides = async (index): Promise<AnyResponse<SlidesDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}publisher/${index}/slides`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getManufacturer = async (index): Promise<AnyResponse<ManufacturerDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}manufacturer/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getManufacturerSlides = async (index): Promise<AnyResponse<SlidesDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}manufacturer/${index}/slides`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
