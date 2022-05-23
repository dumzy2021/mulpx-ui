import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Highcharts from 'highcharts';
import { UserTransaction } from 'src/app/models';
import { TransactionService } from 'src/app/services/transaction.service';
@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss'],
})
export class QuickLinksComponent implements OnInit {
  loading: boolean = false;
  amountForm!: FormGroup;
  @ViewChild('close') close!: ElementRef;
  userTransactions: UserTransaction[] = [];

  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Average Transactions',
    },
    xAxis: {
      title: {
        text: 'Nigeria',
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Transactions',
      },
    },
    series: [
      {
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 24.4, 19.3, 16.0, 18.4, 17.9,
        ],
        type: 'spline',
      },
    ],
  };
  constructor(
    private transactionService: TransactionService,
    private fb: FormBuilder
  ) {
    // this.close.nativeElement.click();
  }
  get amount() {
    return this.amountForm.get('amount');
  }
  ngOnInit(): void {
    // Initialize Form
    this.amountForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(100)]],
    });
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.getUserTransactions().subscribe({
      next: (data: UserTransaction[]) => {
        console.log(data);
        this.userTransactions = data;
      },
    });
  }
  onFormSubmit() {
    if (this.amountForm.invalid) {
      this.amountForm.controls['amount'].markAsDirty();
      this.amountForm.controls['amount'].updateValueAndValidity();
      return;
    }
    this.loading = true;
    this.transactionService.sendMoney(this.amountForm.value).subscribe({
      next: (data) => {
        this.close.nativeElement.click();
        console.log(data);
        this.loading = false;
        this.amountForm.reset();
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }
}
