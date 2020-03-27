import { Component , Input} from '@angular/core';
import { NgSwitch } from '@angular/common';


declare const calc:any;
declare const gen:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 public num:number;
 public diff:number;
 public rand:number;
 @Input() input_num:number;
 
  input(){
    if(this.input_num>=1 && this.input_num<=100){
      window.alert("Input is accepted");
        this.num=this.input_num;
    }
    else 
      {
        window.alert("Enter a valid input which is in the range of 1 and 100");
      };
      this.diff=this.rand-this.num;     
   }   
  }