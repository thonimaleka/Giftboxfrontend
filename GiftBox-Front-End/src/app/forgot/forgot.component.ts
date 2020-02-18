import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private _activatedRouter:ActivatedRoute,
              private _router:Router ) { }

  submitEmailClick():void{
    this._router.navigate(['/otp']);

 }

  ngOnInit(): void {
  }

}
