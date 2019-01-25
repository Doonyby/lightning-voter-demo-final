import { Component, Inject } from "@angular/core";
import { CurrentIdentity } from "./currentIdentity.service";
import { Auth } from "./auth.service";
import { Router } from "@angular/router";
import { Toastr, TOASTR_TOKEN } from "../toastr/toastr.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    private currentIdentity: CurrentIdentity,
    private auth: Auth,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private router: Router
  ) {}

  ngOnChanges() {
    if(this.currentIdentity.authenticated()) {
      this.router.navigate(['/admin/results']);
    }
  }
  
  login(newForm) {
    this.auth.login({
      username: newForm.email,
      password: "pass"
    }).then(() => {
      this.router.navigate(['/admin/results']);
    }, (err) => {
      this.toastr.error(err);
    })
  }
}

