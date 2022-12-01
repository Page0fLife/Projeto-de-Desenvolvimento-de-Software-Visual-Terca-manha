import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios!: Usuario[];
  id!: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Usuario[]>
      ("https://localhost:5001/api/usuario/listar")
      .subscribe({
        next: (usuarios) => {
          this.usuarios = usuarios;
        }
      });
  }

  deletar(id: number): void{
    this.http.delete<Usuario>
      (`https://localhost:5001/api/usuario/deletar/${id}`)
      .subscribe({
        next: (usuario) => {
          this.ngOnInit();
        },
      });
  }

}
