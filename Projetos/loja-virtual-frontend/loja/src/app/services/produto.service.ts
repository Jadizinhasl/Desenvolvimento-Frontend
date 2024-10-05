import { Produto } from './../models/produto';
import { AdicionarProdutosComponent } from './../components/views/adicionar-produtos/adicionar-produtos.component';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ProdutoService {
  public baseUrl: string = "http://localhost:8080/produtos"
  constructor(private http: HttpClient) { }

  public buscarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl)
  }

  public adicionarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto)
  }

  public deletarProduto(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
