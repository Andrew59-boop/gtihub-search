import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  

  private username: string;
  

  constructor(private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'Andrew59-boop'
  }

  getProfileInfo(user):any{
    return this.http.get("https://api.github.com/" +  user)
   }



  updateProfile(username:string){
    this.username =username  }
}