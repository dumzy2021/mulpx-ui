import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss'],
})
export class QuickLinksComponent implements OnInit {
  failed: boolean = false;
  loading: boolean = false;
  message: string = '';
  amountForm!: FormGroup;
  @ViewChild('close') close!: ElementRef;
  @ViewChild('open') open!: ElementRef;

  constructor(
    private transactionService: TransactionService,
    private fb: FormBuilder
  ) {}
  get amount() {
    return this.amountForm.get('amount');
  }
  ngOnInit(): void {
    // Initialize Form
    this.amountForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(100)]],
    });
  }
  openModal() {
    this.open.nativeElement.click();
  }
  resetModal() {
    this.failed = false;
    this.message = '';
  }

  onFormSubmit() {
    if (this.amountForm.invalid) {
      this.amountForm.controls['amount'].markAsDirty();
      this.amountForm.controls['amount'].updateValueAndValidity();
      return;
    }
    this.loading = true;
    this.transactionService.sendMoney(this.amountForm.value).subscribe({
      next: (data: any) => {
        this.close.nativeElement.click();
        this.message = data?.message;
        this.loading = false;
        this.amountForm.reset();
        this.openModal();
      },
      error: (error) => {
        this.failed = true;
        this.loading = false;
        this.openModal();
      },
    });
  }
}
