import { http } from './http';

export const getProducts = async () => {
    let response = await http.get('products');
    return response.data;
}
export const getProduct = async (id) => {
    let response = await http.get('products/' + id);
    return response.data;
}
export const postProducts = async (newProduct) => {
    await http.post('products', newProduct);
}