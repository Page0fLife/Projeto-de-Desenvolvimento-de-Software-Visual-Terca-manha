import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Usuario } from "src/app/models/Usuario";

@Component({
  selector: "app-cadastrar-usuario",
  templateUrl: "./cadastrar-usuario.component.html",
  styleUrls: ["./cadastrar-usuario.component.css"],
})
export class CadastrarUsuarioComponent implements OnInit {
  nome!: string;
  email!: string;
  senha!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let usuario: Usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    this.http
      .post<Usuario>("https://localhost:5001/api/usuario/cadastrar", usuario)
      .subscribe({
        next: (usuario) => {
          this._snackBar.open("A seleção foi cadastrada!", "Ok!", {
          });
          this.router.navigate(["usuario/cadastrar"]);
        },
        error: (error) => {
          console.error("Ocorreu um erro!");
        },
      });
  }

  alterar(): void {
    let usuario: Usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };
    this.http.patch<Usuario>("https://localhost:5001/api/usuario/listar", usuario)
    .subscribe({
      next: (usuario)=> {
        this._snackBar.open("Você está indo para alteração dos dados do usuário", "Ok!", {});
        this.router.navigate(["usuario/listar"])
      },
      error: (error) => {
        console.error("Ocorreu um erro!")
      },
    })
  }
}
