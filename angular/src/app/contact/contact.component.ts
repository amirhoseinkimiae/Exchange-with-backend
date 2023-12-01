import { Component, ElementRef, ViewChild} from '@angular/core';
import { ContactService } from '../services/contact.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isCallingApi:boolean=false;
  isSubmitted: boolean= false;
  name: string="";
  email: string=" ";
  dis: string=" ";

  @ViewChild('txtName') txtName?: ElementRef;
  @ViewChild('txtEmail') txtEmail?: ElementRef;
  @ViewChild('txtDescription') txtDescription?: ElementRef;

  constructor(private service:ContactService,private _snakBar:MatSnackBar){

  }

  // this.isSubmitted=true;
    // this.name=this.txtName?.nativeElement.value ;
    // this.email=this.txtEmail?.nativeElement.value;
    // this.dis=this.txtDescription?.nativeElement.value;
  sendForm(){
    this.isCallingApi=true;
    this.service.sendContactForm({
      name: this.name=this.txtName!.nativeElement.value,
      emil:this.email=this.txtEmail!.nativeElement.value,
      description:this.email=this.txtEmail!.nativeElement.value
    }).subscribe(output=>{
      this.isCallingApi=false;
      if(output.status){
        this.name=this.txtName!.nativeElement.value ;
        this.email=this.txtEmail!.nativeElement.value;
        this.dis=this.txtDescription!.nativeElement.value;
        this.isSubmitted=true;

        this._snakBar.open(output.message!,'dismiss',{
          duration:3000
        })
      }
    },error=>{
      console.log('server output', error);
      this.isCallingApi=false
    });
  }
}
