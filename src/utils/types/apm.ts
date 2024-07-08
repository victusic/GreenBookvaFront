export interface Author {
  id: number;
  name: string;
  surname: string;
  description?: string;
  wikiLink?: string;
  yearOfLife?: string;
  image?: string;
}

export interface AuthorImages {
  id: number;
  image: string;
}

export interface Publisher {
  id: number;
  name: string;
  description?: string;
  wiki_link?: string;
  image: string;
}

export interface Manufacturer {
  id: number;
  name: string;
  description?: string;
  wiki_link?: string;
  image: string;
}

export interface Slides {
  id: number;
  slideText: string;
  image: string;
}
