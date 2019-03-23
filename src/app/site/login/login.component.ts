import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  txtOrgenizationId: string = "";
  txtUserName: string = "";
  txtTempPassword: string = "";

  constructor() { }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.txtOrgenizationId, this.txtTempPassword, this.txtUserName);
  }

}
