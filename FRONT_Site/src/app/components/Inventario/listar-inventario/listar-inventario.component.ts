import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/models/Inventario';
import { Itens } from 'src/app/models/Itens';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrls: ['./listar-inventario.component.css']
})
export class ListarInventarioComponent implements OnInit {

  inventario!: Inventario[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Inventario[]>
      ("https://localhost:5001/api/inventario/listar")
      .subscribe({
        next: (inventario) => {
          this.inventario = inventario;
        }
      });
  }

  deletar(id: number): void{
    this.http.delete<Inventario>
      (`https://localhost:5001/api/inventario/deletar/${id}`)
      .subscribe({
        next: (inventario) => {
          this.ngOnInit();
        },
      });
  }
}