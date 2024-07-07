import { ExternalLinksState } from './types/externalLinks';

const defaultState: ExternalLinksState = {
  telegram: 'https://t.me/victusic',
  github: 'https://github.com/victusic',
  linkedIn: 'https://www.linkedin.com/in/viktor-khoroshilov-026235277',
  synopsis: 'https://drive.google.com/file/d/1EYnMtKTCBi0idCHBwry0nsTZg7VWhtfF/view?usp=sharing',
  passphrase: 'https://open.spotify.com/user/xklo2w55601u1b164u6vgy9vh?si=B0uK6jZXSJuLxKA1eU7EjA',
};

export const externalLinksReducer = (state: ExternalLinksState = defaultState): ExternalLinksState => {
  return state;
};
