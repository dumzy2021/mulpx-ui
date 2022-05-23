import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DashboardStats, UserTransaction } from '../models';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}
  getUserTransactions() {
    return this.http.get<UserTransaction[]>(
      environment.baseUrl + 'transactions/user/7'
    );
  }
  getDashboardStats() {
    return this.http.get<DashboardStats>(
      environment.baseUrl + 'transactions/dashboard/7'
    );
  }
  sendMoney(body: { amount: number }) {
    return this.http.post(
      environment.baseUrl + 'transactions/',
      body,
      httpOptions
    );
  }
}
