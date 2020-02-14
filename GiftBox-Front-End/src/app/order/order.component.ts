import { Component, OnInit, Input } from '@angular/core';
import { SevirceService } from './../sevirce.service';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() orderData = {
    fullName: " ", email: " ",phoneNo:" ", address: " ", city: " ", province: " ", code: " "
  } 

  constructor( private _SevirceService: SevirceService) { }

  orders: any =[];

  ngOnInit() {
    this.getOrders();
  }

  getOrders()
  {
    this._SevirceService.getOrders().subscribe((data: any) => 
    {
      this.orders = data;
      console.log(this.orders);
    });
  }

  placeOrder()
  {
    this._SevirceService.addOrder(this.orderData).subscribe(
    data =>
      console.log(data));
      console.log(this.orderData.fullName);
      console.log(this.orderData.email);
      console.log(this.orderData.phoneNo);
      console.log(this.orderData.address);
      console.log(this.orderData.city);
      console.log(this.orderData.province);
      console.log(this.orderData.code);

  }

}
