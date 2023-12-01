import { PhotoInterface } from './../models/photo.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GollaryService {
 private api:string='https://picsum.photos/v2/list?limit=10&page=';

  constructor(private http:HttpClient) { }

  
  getPhotos(page:number=1) : Observable<PhotoInterface[]>{
    return this.http.get(this.api.concat(page.toString())) as Observable<PhotoInterface[]>;
  }

}
