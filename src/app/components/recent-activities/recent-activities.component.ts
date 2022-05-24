import { Component, OnInit } from '@angular/core';
import { UserTransaction } from 'src/app/models';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.scss'],
})
export class RecentActivitiesComponent implements OnInit {
  userTransactions: UserTransaction[] = [];
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }
  getTransactions() {
    this.transactionService.getUserTransactions().subscribe({
      next: (data: UserTransaction[]) => {
        this.userTransactions = data;
      },
    });
  }
}
