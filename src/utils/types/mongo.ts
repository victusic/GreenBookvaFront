export interface Promocode {
  id: string;
  name: string;
  pattern: number;
  discount?: number;
}

export interface Phrase {
  id: string;
  number: number;
  text: string;
}
