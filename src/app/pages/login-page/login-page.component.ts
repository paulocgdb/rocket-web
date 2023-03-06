import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  errorMessage = false;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.loginService.realizarLogin(this.loginForm.value).subscribe(
      data => {
        if(data) {
          this.router.navigate(['/consultar-candidatura']);
        }

      },
      error => {
        console.log(error);
      }
    );
  }
}
