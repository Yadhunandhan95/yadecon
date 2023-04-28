import { Component,Input } from '@angular/core';
import { GetAPIService } from './get-api.service';
import { ProductsComponent } from './products/products.component';
// import { Comments } from './classes/comments';

// export class Comments{
  
//   assets: any;
//   categories: any;
//   search: any;
//   description: any;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  constructor(private _GetAPIService: GetAPIService){

  }
//   lstcomments:any;
//   //lstcomments!: Comments[];
//   ngOnInit(){

//     this._GetAPIService.apiCall()
//     .subscribe
//     (
// data =>
// {
//   console.log(data)
// this.lstcomments=data.result.data;
// }
//     );
//   }
// }



