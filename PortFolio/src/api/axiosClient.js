import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,

  (error) => {
    const message =
      error?.response?.data?.message ??
      error?.message ??
      'An unexpected error occurred. Please try again.';

    const status = error?.response?.status ?? null;

    return Promise.reject({ message, status });
  }
);

export default axiosClient;
