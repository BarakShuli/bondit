import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginObj:object = {
    orgId: "",
    password: "",
    userName: ""

  };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {}

  doLogin() {
    this.apiService.doDoLogin(this.loginObj).subscribe(data => {
      if(data["status"] === 200) {
        this.router.navigate(['protfolios']);
      }
    });
  }

}
