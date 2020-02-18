import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {

  constructor(private _activatedRouter:ActivatedRoute,
              private _router:Router ) { }

  ngOnInit(): void {
  }

}
