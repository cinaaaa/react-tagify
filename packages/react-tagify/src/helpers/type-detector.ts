// a function that recieves a string and check that it is starting with # or @
// and return the type of the string
export const detectType = (str: string) => {
  if (str.startsWith('#')) return 'tag';
  if (str.startsWith('@')) return 'mention';

  return null;
};
