import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { profile } from '../profile';
import { RepoListService } from './repo-list service/repo-list.service';
import { repository } from '../repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myprofile: profile;
  repos: repository[];
  username: string;

  constructor(private profileservice:ProfileService,private repolistservice:RepoListService) { 

  }

  findProfile(user){
    //this.profileservice.updateProfile(this.username);
    this.profileservice.getProfileInfo(user).subscribe(profile =>{
      this.myprofile = profile;
    });

  
    this.repolistservice.getRepos(user).subscribe(repository => {
  
      this.repos = repository;
    });
  }

  ngOnInit(): void {
    this.findProfile("Andew59-boop")
  }

}