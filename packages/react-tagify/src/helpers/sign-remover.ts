export const signRemover = (str: string) => {
  if (str.startsWith('#')) return str.slice(1);
  if (str.startsWith('@')) return str.slice(1);
  return str;
};
