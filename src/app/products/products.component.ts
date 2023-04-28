import { Component } from '@angular/core';
import { GetAPIService } from '../get-api.service';
export class Comments{
  
  assets: any;
  categories: any;
  search: any;
  description: any;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private _GetAPIService: GetAPIService){

  }
  lstcomments:any;
  ngOnInit(){

    this._GetAPIService.apiCall()
    .subscribe
    (
data =>
{
  console.log(data)
this.lstcomments=data.result.data;
}
    );
  }
}

