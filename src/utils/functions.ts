import constants from "./constants";

export const extractId = (url: string) => {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  const number = pathname.split('/').filter(Boolean).pop();
  return number ?? '';
}

export const getImageUrl = (id: string) => {
  return constants.POKEMON_IMAGE_URL.replace('#id', id);
}

export const extractOffset = (url: string) => {
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  return Number(params.get('offset')) ?? 0;
}