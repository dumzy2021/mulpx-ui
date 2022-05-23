import { Component, OnInit } from '@angular/core';
import { DashboardStats, UserTransaction } from 'src/app/models';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-payment-cards',
  templateUrl: './payment-cards.component.html',
  styleUrls: ['./payment-cards.component.scss'],
})
export class PaymentCardsComponent implements OnInit {
  dashboardStats!: DashboardStats;
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getDashboardStats();
  }
  getDashboardStats() {
    this.transactionService.getDashboardStats().subscribe({
      next: (data: DashboardStats) => {
        this.dashboardStats = data;
      },
    });
  }
}
