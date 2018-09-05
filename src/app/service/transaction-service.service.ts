import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionInformation } from '../models/transaction-information';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  webAPI : string ='https://localhost:44321/api/TransactionInformations';
  constructor(private http:HttpClient) { }

  getAllTransaction()
  {
    return this.http.get<TransactionInformation[]>(this.webAPI)
  }
}
