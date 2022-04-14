const addQueryParam = (url: string, query: string) => {
  if (url.includes("?")) {
    return `${url}&${query}`;
  }

  return `${url}?${query}`;
};

export default {
  addQueryParam,
};
