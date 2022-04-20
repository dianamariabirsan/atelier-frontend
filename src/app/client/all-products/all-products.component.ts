import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../model/models";
import {ProductService} from "../../service/product.service";
import {ToastService} from "../../service/toast.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit, OnDestroy {
  products: Product[] | undefined;
  subscription: Subscription[] = [];

  constructor(
    private toastService: ToastService,
    private productService: ProductService) {
  }

  ngOnInit() {
    console.log("Nu se apeleaza")
    this.getAllProducts();
  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }

  private getAllProducts() {
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
}
