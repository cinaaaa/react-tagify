export const detectType = (str: string) => {
  if (str.startsWith('#')) return 'tag';
  if (str.startsWith('@')) return 'mention';

  return null;
};
