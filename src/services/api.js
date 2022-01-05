export const fetchGIFs = (search_key) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?q=${JSON.stringify(search_key)}&api_key=${process.env.REACT_APP_API_KEY}`
  );
};
