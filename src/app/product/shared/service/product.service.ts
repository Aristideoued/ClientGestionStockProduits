
import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Observable  } from "rxjs-compat/Observable";
import {CrudService  } from "../../../shared/crud.service";

import { API_URLS } from "../../../config/api.url.config";
import { Product } from "../model/product.model";

@Injectable({
  providedIn:'root'})
export class ProductService extends CrudService{
url='/product';
}
