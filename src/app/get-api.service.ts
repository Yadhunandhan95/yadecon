import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  constructor(private httpclient:HttpClient) {

  }
  apiCall(): Observable<any> {
    return this.httpclient.post('https://hskartpp.ecbee.net:9448/product/filterproducts', 
    {
      "domain_name": "https://hskartpp.ecbee.net",
      "user_id": null,
      "extras": {
          "find": {
              "brand": [],
              "category": [],
              "theme": [],
              "finish": [],
              "feature": [],
              "price": [],
              "size": [],
              "thickness": [],
              "color": [],
              "type": [],
              "product_material": [],
              "last90days": true,
              "last30days": false,
              "includeoutofstock": false,
              "isglobalfilter": false
          },
          "pagination": true,
          "paginationDetails": {
              "limit": 1,
              "pagesize": 10
          },
          "sorting": true,
          "sortingDetails": {
              "sortfield": "name",
              "sortorder": -1
          },
          "subcategoryfilter": false
      }
  }
  )
  }
}
