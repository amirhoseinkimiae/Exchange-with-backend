import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoInterface } from '../models/photo.models';
import {GollaryService} from '../services/gollary.service'

@Component({
  selector: 'app-gollery',
  templateUrl: './gollery.component.html',
  styleUrls: ['./gollery.component.scss']
})
export class GolleryComponent {
  exactPhotosInPage=10;
  currentPage: number=1;
  Photos:PhotoInterface[]=[];

  constructor(private service: GollaryService){}

  ngOnInit() :void{
    // this.Posts.subscribe(data=>{
    //   data[0].id;
    // })
    this.detectLazyLoading();
  }
  detectLazyLoading(){
    const observer=new IntersectionObserver(enteries=>{
      enteries.forEach(entery=>{
        if(entery.isIntersecting){
          this.service.getPhotos(this.currentPage).subscribe(data=>{
            data.forEach(image=>{
              this.Photos.push(image);
            })
            // this.Photos=data;
            this.currentPage++;
          },err=>{
            console.log('error',err);
          })
        }
      });
    });
    observer.observe(document.querySelector('.lazy-loading-detecter')!);
  }
}
