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
    this.router.navigate(['pin-validator', 'withdraw']);
  }
  transfer(){
    this.router.navigate(['pin-validator', 'transfer']);
  }
  back(){
    this.router.navigate(['pin-validator', 'home']);
  }
  pinChange(){
    this.router.navigate(['pin-validator', 'pin-change']);
  }
  balance(){
    this.router.navigate(['pin-validator', 'balance']);
  }
}
