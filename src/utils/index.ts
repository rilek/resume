export const getLanguage = (path: string) => {
  const regex = new RegExp("^/?(en|pl)/?");
  const matches = path.match(regex);

  return matches?.[1];
};
