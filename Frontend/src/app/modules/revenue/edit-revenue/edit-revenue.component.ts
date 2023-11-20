import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import RevenueMessage from 'src/app/main/messages/RevenueMessage';
import RevenueTestService from 'src/app/main/mocks/RevenueTestService';
import Revenue from 'src/app/main/models/Revenue';

@Component({
  selector: 'app-edit-revenue',
  templateUrl: './edit-revenue.component.html',
  styleUrls: ['./edit-revenue.component.css']
})
export class EditRevenueComponent extends URLLoader implements OnInit {

  model: any


  constructor(private revenueTestService: RevenueTestService,
    private message: RevenueMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Revenue(0, '','', '', '', '', '')
  }

  ngOnInit(): void {
    this.revenueTestService.ID.subscribe(idd => {
      // Check if idd is not null and is a valid number
      if (idd && !isNaN(parseInt(idd))) {
        const revenue = this.revenueTestService.get(parseInt(idd));
        this.model = revenue ? revenue : this.create();
      } else {
        this.model = this.create();
      }
    });
  }

  edit() {
    this.revenueTestService.update(this.model);
    super.show('Confirmation', this.message.confirmations.edit, 'success');
  }

}