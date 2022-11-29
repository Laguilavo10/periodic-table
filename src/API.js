const API_KEY = import.meta.env.VITE_API_KEY

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "periodictable.p.rapidapi.com",
  },
};

export const API = 'https://periodictable.p.rapidapi.com/'
