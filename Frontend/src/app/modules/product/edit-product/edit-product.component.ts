import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ProductMessage from 'src/app/main/messages/ProductMessage';
import ProductTestService from 'src/app/main/mocks/ProductTestService';
import Product from 'src/app/main/models/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent extends URLLoader implements OnInit {

  model: any


  constructor(private productTestService: ProductTestService,
    private message: ProductMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Product(0, '','', '', '', '', '', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {
    this.productTestService.ID.subscribe(idd => {
      // Check if idd is not null and is a valid number
      if (idd && !isNaN(parseInt(idd))) {
        const product = this.productTestService.get(parseInt(idd));
        this.model = product ? product : this.create();
      } else {
        this.model = this.create();
      }
    });
  }

  edit() {
    this.productTestService.update(this.model);
    super.show('Confirmation', this.message.confirmations.edit, 'success');
  }

}
