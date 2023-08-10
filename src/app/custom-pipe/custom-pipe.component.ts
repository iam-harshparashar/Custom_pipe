import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
  constructor() {}
  title1:any;
  formUppercase=new FormGroup({
    title: new FormControl('')
  })

  onSubmit()
  {
    this.title1 = this.formUppercase.value.title;
  }

  ngOnInit(): void {
  }
  
}
