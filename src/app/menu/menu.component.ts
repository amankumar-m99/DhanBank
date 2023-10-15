import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router:Router){}

  withdraw(){
    this.router.navigate(['withdraw']);
  }
  transfer(){
    this.router.navigate(['transfer']);
  }
  back(){
    this.router.navigate(['home']);
  }
  pinChange(){
    this.router.navigate(['pin-change']);
  }
  balance(){
    this.router.navigate(['balance']);
  }
}
