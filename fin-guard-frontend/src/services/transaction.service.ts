import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost/your-php-backend/api/transactions.php';

  constructor(private http: HttpClient) { }

  createTransaction(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
