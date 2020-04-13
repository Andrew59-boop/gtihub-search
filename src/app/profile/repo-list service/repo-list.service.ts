import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoListService {
   

  constructor(private http:HttpClient) { 
    console.log("service is now ready!")
    
  }

  getRepos(user):any{
    return this.http.get("https://api.github.com/users/" + user + "/repos");
  
  }

}