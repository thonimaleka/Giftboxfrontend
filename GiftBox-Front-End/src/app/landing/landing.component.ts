import { Component, OnInit } from '@angular/core';
import{SevirceService} from '.././sevirce.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public count= 1;

  public counter() {
    this.count += 1;
  }

  //public numberOfLikes: number=0;
  public numberOfLikes=0;

 public likeButtonClick() {
    this.numberOfLikes++;
  }

  public dislikeButtonClick() {
    this.numberOfLikes--;
  }


  constructor(private data: SevirceService) { }

  ngOnInit(): void {
  }

updateText(numberOfLikes){
  this.data.updateData(numberOfLikes);
}

}
