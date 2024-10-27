import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction',
  template: `<button (click)="submitTransaction()">Submit</button>`,
})
export class TransactionComponent {

  constructor(private transactionService: TransactionService) { }

  submitTransaction() {
    const transactionData = { amount: 100, description: 'Test transaction' };
    this.transactionService.createTransaction(transactionData).subscribe(response => {
      console.log(response);
    });
  }
}
