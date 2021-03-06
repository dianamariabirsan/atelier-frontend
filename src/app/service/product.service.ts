import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ordersFilter, productsDeleteAndGetById, productsFilter, productsUrl} from "./url";
import {Product} from "../model/models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*'
    });
  }

  getAllProducts() {
    return this.http.get(productsUrl, {headers: this.httpHeaders});
  }

  saveProduct(product: Product) {
    return this.http.post(productsUrl, JSON.stringify(product), {headers: this.httpHeaders});
  }

  updateProduct(product: Product) {
    return this.http.put(productsUrl, JSON.stringify(product), {headers: this.httpHeaders});
  }

  deleteProductById(productId: number) {
    return this.http.delete(productsDeleteAndGetById(productId.toString()), {headers: this.httpHeaders});
  }

  filterProducts(filter: string, minPrice: number, maxPrice: number, sortAsc: boolean) {
    console.log('filterProducts', filter, minPrice, maxPrice, sortAsc);
    let queryStringParams = [];
    if (filter) {
      queryStringParams.push(`filter=${filter}`)
    }
    if (minPrice) {
      queryStringParams.push(`minPrice=${minPrice}`)
    }
    if (maxPrice) {
      queryStringParams.push(`maxPrice=${maxPrice}`)
    }
    if (sortAsc !== undefined) {
      queryStringParams.push(`sortAsc=${sortAsc}`)
    }
    const queryString = queryStringParams.length > 0 ? `?${queryStringParams.join('&')}` : '';

    return this.http.get(`${productsFilter}${queryString}`,
      {headers: this.httpHeaders}
    );
  }
}
