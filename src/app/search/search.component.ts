import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { profile } from '../profile'
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchtext:string

  @Output()
  _profile:EventEmitter<string> =new EventEmitter<string>()
  search(){
    this._profile.emit(this.searchtext)
    this.searchtext=""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
