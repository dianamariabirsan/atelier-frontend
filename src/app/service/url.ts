export const baseUrl = 'http://localhost:8080/atelier';

export const userUrl = baseUrl + '/user';
export const productUrl = baseUrl + '/product';
export const orderUrl = baseUrl + '/order';
export const basketUrl = baseUrl + '/basket';

export const productsUrl = productUrl + '/products';
export const ordersUrl = orderUrl + '/orders';

export const ordersFilter= `${orderUrl}/filter`;
export const productsFilter= `${productUrl}/search`;

export const userLogin = `${userUrl}/login`;
export const userLogout = `${userUrl}/logout`;
export const userRegister = `${userUrl}/register`;
export const userSaveAccountSettings = `${userUrl}/save-account-settings`;

export function productsDeleteAndGetById(id: string) { return `${productUrl}/${id}`;}

export function ordersDeleteAndGetById(id: string) { return `${ordersUrl}/${id}`;}
