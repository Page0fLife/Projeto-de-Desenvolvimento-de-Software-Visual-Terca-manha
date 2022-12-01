import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Itens } from 'src/app/models/Itens';

@Component({
  selector: 'app-listar-itens',
  templateUrl: './listar-itens.component.html',
  styleUrls: ['./listar-itens.component.css']
})
export class ListarItensComponent implements OnInit {

  itens!: Itens[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Itens[]>
      ("https://localhost:5001/api/Item/listar")
      .subscribe({
        next: (Itens) => {
          this.itens = Itens;
        }
      });
  }

  deletar(id: number): void{
    this.http.delete<Itens>
      (`https://localhost:5001/api/Item/deletar/${id}`)
      .subscribe({
        next: (Itens) => {
          this.ngOnInit();
        },
      });
  }
}
