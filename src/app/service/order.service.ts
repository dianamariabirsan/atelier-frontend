import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {basketUrl, ordersDeleteAndGetById, ordersFilter, ordersUrl, orderUrl} from "./url";
import {Order} from "../model/models";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*'
    });
  }


  getAllOrders() {
    return this.http.get(ordersUrl, { headers: this.httpHeaders });
  }

  filterOrders(orderStatus: string) {
    return this.http.get(`${ordersFilter}?orderStatus=${orderStatus}`, { headers: this.httpHeaders });
  }

  deleteOrderById(orderId: number) {
    return this.http.delete(ordersDeleteAndGetById(orderId.toString()), { headers: this.httpHeaders });
  }

  getBasketProducts() {
    return this.http.get(basketUrl, { headers: this.httpHeaders });
  }

  placeOrder(order: Order) {
    return this.http.post(orderUrl, JSON.stringify(order), { headers: this.httpHeaders });
  }
}
