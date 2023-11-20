import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ExpenseMessage from 'src/app/main/messages/ExpenseMessage';
import ExpenseTestService from 'src/app/main/mocks/ExpenseTestService';
import Expense from 'src/app/main/models/Expense';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent extends URLLoader implements OnInit {

  model: Expense


  constructor(private expenseTestService: ExpenseTestService,
    private message: ExpenseMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Expense(0, '', '', '', '', '', '')
  }

  ngOnInit(): void {
    this.expenseTestService.ID.subscribe(idd => {
      // Check if idd is not null and is a valid number
      if (idd && !isNaN(parseInt(idd))) {
        const expense = this.expenseTestService.get(parseInt(idd));
        this.model = expense ? expense : this.create();
      } else {
        this.model = this.create();
      }
    });
  }

  edit() {
    this.expenseTestService.update(this.model);
    super.show('Confirmation', this.message.confirmations.edit, 'success');
  }
}
