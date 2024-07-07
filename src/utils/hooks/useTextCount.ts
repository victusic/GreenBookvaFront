export const useTextCount = (text: string, count: number) => {
  switch (true) {
    case count === 11:
    case count === 12:
    case count === 13:
    case count === 14:
      return text + 'ов';
    case count % 10 === 1:
      return text;
    case count % 10 === 2:
    case count % 10 === 3:
    case count % 10 === 4:
      return text + 'а';
    default:
      return text + 'ов';
  }
};
