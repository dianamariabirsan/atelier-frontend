export const baseUrl = 'http://localhost:8080/atelier';

export const userManagementUrl = `${baseUrl}/users-management`;
export const userLogin = `${userManagementUrl}/login`;
export const userLogout = `${userManagementUrl}/logout`;
export const userSaveAccountSettings = `${userManagementUrl}/account-settings`;

export const clientUrl = baseUrl + '/client';
export const productUrl = baseUrl + '/product';
export const orderUrl = baseUrl + '/order';

export const productsUrl = productUrl + '/products';
export const ordersUrl = orderUrl + '/orders';

export const ordersFilter= `${orderUrl}/filter`;
export const productsFilter= `${productUrl}/search`;

export function productsDeleteAndGetById(id: string) { return `${productUrl}/${id}`;}
