import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pin-validator',
  templateUrl: './pin-validator.component.html',
  styleUrls: ['./pin-validator.component.css']
})
export class PinValidatorComponent {
  menuId='';
  constructor(private router:Router, private activatedRoute:ActivatedRoute){
    this.menuId = this.activatedRoute.snapshot.params['menu'];
  }

  submit(){
    console.log(this.menuId);
    this.router.navigate([this.menuId]);
  }

  cancel(){
    this.router.navigate(['home']);
  }
}
