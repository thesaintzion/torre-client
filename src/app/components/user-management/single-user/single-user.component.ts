import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/models';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  @Input() user: User = {
    name: '',
    picture: '',
    professionalHeadline: '',
    skills: [],
    username: ''
  }

  @Output() userDetails: EventEmitter<any> = new EventEmitter();

  constructor() { }


  showUserDetails(user: User, skill: string): void {
    this.userDetails.emit([user, skill]);
  }


  ngOnInit(): void {
  }

}
