import { http } from "./axios-config";

export const getProducts = async () => {
    let response = await http.get('products');
    return response.data;
}
export const postProduct = async (newProduct) => {
    await http.post('products', newProduct);
}
export const putProduct = async (newProduct) => {
    await http.put('products/' + newProduct.id, newProduct);
}
export const delProduct = async (productId) => {
    await http.delete('products/' + productId);
}