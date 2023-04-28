import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent implements OnInit{
constructor(private route: ActivatedRoute){

}
  ngOnInit() {
this.route.paramMap.subscribe(params => {
  console.log(params)
})
  }
}
