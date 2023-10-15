import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-change',
  templateUrl: './pin-change.component.html',
  styleUrls: ['./pin-change.component.css']
})
export class PinChangeComponent {
  constructor(private router:Router){}

  submit(){}

  cancel(){
    this.router.navigate(['home']);
  }
}
