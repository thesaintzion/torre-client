import { Injectable } from '@angular/core';
import { User } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  users: User[]  = [];
  query: string = '';

  constructor() { }
}
