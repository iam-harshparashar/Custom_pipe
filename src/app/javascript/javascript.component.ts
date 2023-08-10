import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent{
  title="javascript";
    
  onClick(){
    console.log("welcome to javascript");
  }
}
