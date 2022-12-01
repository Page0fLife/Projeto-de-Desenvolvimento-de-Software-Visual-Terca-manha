import { Inventario } from './../../../models/Inventario';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Itens } from 'src/app/models/Itens';
import { Usuario } from 'src/app/models/Usuario';


@Component({
  selector: "app-cadastrar-inventario",
  templateUrl: "./cadastrar-inventario.component.html",
  styleUrls: ["./cadastrar-inventario.component.css"],
})
export class CadastrarInventarioComponent implements OnInit {
  usuarioId!: number;
  itemId!: number;
  inventarioId!: number;
  erro!: string;
  
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let inventario: Inventario = {
      itemId: this.itemId,
      usuarioId: this.usuarioId
    };

    this.http
      .post<Inventario>("https://localhost:5001/api/inventario/cadastrar", inventario)
      .subscribe({
        next: (inventario) => {
          this._snackBar.open("A seleção foi cadastrada!", "Ok!", {
          });
          this.router.navigate(["inventario/listar"]);
        },
        error: (error) => {
          console.error("Ocorreu um erro!");
        },
      });
  }

  alterar(): void {
    let inventario: Inventario = {
      itemId: this.itemId,
      usuarioId: this.usuarioId
    };
    this.http.patch<Inventario>("https://localhost:5001/api/inventario/listar", inventario)
    .subscribe({
      next: (inventario)=> {
        this._snackBar.open("Você está indo para alteração dos dados do usuário", "Ok!", {});
        this.router.navigate(["inventario/listar"])
      },
      error: (error) => {
        console.error("Ocorreu um erro!")
      },
    })
  }
}
