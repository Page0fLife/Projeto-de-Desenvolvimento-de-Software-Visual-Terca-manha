import { Itens } from 'src/app/models/Itens';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";


@Component({
  selector: "app-cadastrar-itens",
  templateUrl: "./cadastrar-itens.component.html",
  styleUrls: ["./cadastrar-itens.component.css"],
})
export class CadastrarItensComponent implements OnInit {
  nome!: string;
  categoria!: string;
  descricao!: string;
  preco!: string;
  jogo!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let itens: Itens = {
      nome: this.nome,
      categoria: this.categoria,
      descricao: this.descricao,
      preco: this.preco,
      jogo: this.jogo
    };

    this.http
      .post<Itens>("https://localhost:5001/api/item/cadastrar", itens)
      .subscribe({
        next: (itens) => {
          this._snackBar.open("A seleção foi cadastrada!", "Ok!", {
          });
          this.router.navigate(["usuario/cadastrar"]);
        },
        error: (error) => {
          console.error("Ocorreu um erro!");
        },
      });
  }
}
