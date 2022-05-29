const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "58b853706dc0e733da705aebb18c5643",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
