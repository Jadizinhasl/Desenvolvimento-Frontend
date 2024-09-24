import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  public email!: string;
  public senha!: string;
  public cpf!: string;
  public confirmacaoSenha!: string;

  public cadastrar(): void {
    if (!this.email || !this.senha || !this.cpf || !this.confirmacaoSenha) {
      alert('Todos os dados precisam ser preenchidos')
    } else if (this.confirmacaoSenha != this.senha) {
      alert('As senhas precisam ser iguais')
    }
    else {
      alert('Cadastro feito com sucesso!')
    }
  }
}
