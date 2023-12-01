import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ContactInterface ,ContactFeedbackInterface} from '../models/contact-form.model';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api:string='https://testangularcli.free.beeceptor.com/api/contact-form';

  constructor(private http:HttpClient) { }

  sendContactForm(data:ContactInterface) : Observable<ContactFeedbackInterface>{
    return this.http.post(this.api,data) as Observable<ContactFeedbackInterface>;
  }
}
