import {
  AuthorDTO,
  AuthorImagesDTO,
  ManufacturerDTO,
  PublisherDTO,
  SlidesDTO,
} from '../types/requestActions';
import { AnyResponse } from '../types/types';

export const getAuthor = async (index): Promise<AnyResponse<AuthorDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/author/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getAuthorSlides = async (index): Promise<AnyResponse<SlidesDTO[]>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/author/${index}/slides`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getAuthorImages = async (index): Promise<AnyResponse<AuthorImagesDTO[]>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/author/${index}/images`);

    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPublisher = async (index): Promise<AnyResponse<PublisherDTO[]>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/publisher/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPublisherSlides = async (index): Promise<AnyResponse<SlidesDTO[]>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/publisher/${index}/slides`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getManufacturer = async (index): Promise<AnyResponse<ManufacturerDTO[]>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/manufacturer/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getManufacturerSlides = async (index): Promise<AnyResponse<SlidesDTO[]>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/manufacturer/${index}/slides`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
