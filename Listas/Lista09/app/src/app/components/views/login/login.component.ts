import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email!: string;
  public senha!: string;

  public login(): void {
    if (!this.email || !this.senha) {
      alert('Todos os dados precisam ser preenchidos')
    }
    else {
      alert('Login realizado com sucesso!')
    }
  }
}