export const baseUrl = 'http://localhost:8080/atelier';

export const clientUrl = baseUrl + '/client';
export const productUrl = baseUrl + '/product';
export const orderUrl = baseUrl + '/order';

export const productsUrl = productUrl + '/products';
export const ordersUrl = orderUrl + '/orders';

export const ordersFilter= `${orderUrl}/filter`;
export const productsFilter= `${productUrl}/search`;

export function productsDeleteAndGetById(id: string) { return `${productUrl}/${id}`;}
