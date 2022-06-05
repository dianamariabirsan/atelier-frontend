import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {basketUrl, ordersDeleteAndGetById, ordersFilter, ordersUrl, orderUrl} from "./url";

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
    return this.http.get(`${ordersFilter}?filter=${orderStatus}`, { headers: this.httpHeaders });
  }

  deleteOrderById(orderId: number) {
    return this.http.delete(ordersDeleteAndGetById(orderId.toString()), { headers: this.httpHeaders });
  }

  getBasketProducts() {
    return this.http.get(basketUrl, { headers: this.httpHeaders });
  }
}
