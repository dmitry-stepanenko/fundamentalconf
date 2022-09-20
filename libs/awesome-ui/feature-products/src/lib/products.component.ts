import { Component, Input } from '@angular/core';
import { AwesomeProduct } from '@fundamentalconf/awesome-ui/models-product';

@Component({
    selector: 'app-products',
    template: `app-products works!`,
})
export class ProductsComponent {
    @Input() product?: AwesomeProduct;
}