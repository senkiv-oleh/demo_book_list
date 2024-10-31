import {
  request,
} from './api';

export const getCategories = () => request(`/categories`);

export const getCategory = (categoryId) => request(`/categories/${categoryId}`);
