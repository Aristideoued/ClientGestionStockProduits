
import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Observable  } from "rxjs-compat/Observable";
import {CrudService  } from "../../../shared/crud.service";

import { API_URLS } from "../../../config/api.url.config";
import { User } from "../model/user.model";


@Injectable({
  providedIn:'root'})
export class UserService extends CrudService{
url='/crud_user';
}
