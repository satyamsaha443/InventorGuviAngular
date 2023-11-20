import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ClientMessage from 'src/app/main/messages/ClientMessage';
import ClientTestService from 'src/app/main/mocks/ClientTestService';
import Client from 'src/app/main/models/Client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent extends URLLoader implements OnInit {

  model: Client


  constructor(private clientTestService: ClientTestService,
    private message: ClientMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Client(0, '', '', '', '', '', '')
  }

  ngOnInit(): void {
    this.clientTestService.ID.subscribe(idd => {
      // Check if idd is not null and is a valid number
      if (idd && !isNaN(parseInt(idd))) {
        const client = this.clientTestService.get(parseInt(idd));
        this.model = client ? client : this.create();
      } else {
        this.model = this.create();
      }
    });
  }

  edit() {
    this.clientTestService.update(this.model);
    super.show('Confirmation', this.message.confirmations.edit, 'success');
  }

}