import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ordersFilter, orderUrl} from "./url";

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
    return this.http.get(orderUrl, { headers: this.httpHeaders });
  }

  filterOrders(filterText: string) {
    return this.http.get(`${ordersFilter}?filter=${filterText}`, { headers: this.httpHeaders });
  }

}
