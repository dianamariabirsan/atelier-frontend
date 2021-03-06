import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Order, Product} from "../../model/models";
import {ProductService} from "../../service/product.service";
import {ToastService} from "../../service/toast.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit, OnDestroy {
  products: Product[] | undefined;
  filterText: any;
  minPrice: any;
  maxPrice: any;
  sortAscending: any;
  subscriptions: Subscription[] = [];

  constructor(
    private toastService: ToastService,
    private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();
    // this.mockProducts();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private getAllProducts() {
    // @ts-ignore
    this.subscriptions.push(this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    }, (err: { error: { message: string; }; }) => {
      this.toastService.addError(err.error.message);
      console.log(err);
    }))
  }

  getProducts() {
    if (this.filterText && this.filterText.length > 0) {
      this.filter();
    } else {
      this.getAllProducts();
    }
  }

  filter() {
    // @ts-ignore
    this.subscriptions.push(this.productService
      .filterProducts(this.filterText, this.minPrice, this.maxPrice, this.sortAscending)
      .subscribe((res: any) => {
        this.products = res;
      }, (err: { error: { message: string; }; }) => {
        this.toastService.addError(err.error.message);
        console.log(err);
      }));
  }

  reset() {
    this.filterText = '';
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.sortAscending = undefined;
    this.getAllProducts();
  }

  messageReceived(msg: any) {
    switch (msg.type) {
      case 'error': {
        this.toastService.addError(msg.message);
        break;
      }
      case 'info': {
        this.toastService.addInfo(msg.message);
        break;
      }
      case 'success': {
        this.toastService.addSuccess(msg.message);
        if (msg.message.indexOf('Product deleted') > -1) {
          this.getAllProducts();
        }
        break;
      }
      case 'warning': {
        this.toastService.addWarning(msg.message);
        break;
      }
      default: {
        this.toastService.addInfo(msg.message);
        break;
      }
    }
  }

  private mockProducts() {
    this.products = [
      {
        id: 1,
        type: "Tip1",
        price: 20,
        image: "../../../assets/product-image-placeholder.jpg"
      },
      {
        id: 2,
        type: "Tip2",
        price: 10,
        image: "../../../assets/product-image-placeholder.jpg"
      },
      {
        id: 3,
        type: "Tip1",
        price: 100,
        image: "../../../assets/product-image-placeholder.jpg"
      },
    ];
  }
}
