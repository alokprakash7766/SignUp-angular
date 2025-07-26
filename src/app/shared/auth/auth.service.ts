import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store data
  setData(res: any) {
    sessionStorage.setItem("email", res.email)
  }


  // get data
  getEmail() {
    return sessionStorage.getItem("email")
  }


  // clear data from session
  clear() {
    sessionStorage.clear()
  }


}
