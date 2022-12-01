import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarInventarioComponent } from './components/Inventario/cadastrar-inventario/cadastrar-inventario.component';
import { ListarInventarioComponent } from './components/Inventario/listar-inventario/listar-inventario.component';
import { CadastrarItensComponent } from './components/Itens/cadastrar-itens/cadastrar-itens.component';
import { ListarItensComponent } from './components/Itens/listar-itens/listar-itens.component';
import { CadastrarUsuarioComponent } from './components/Usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './components/Usuario/listar-usuario/listar-usuario.component';

const routes: Routes = [  {
  path: "usuario/cadastrar",
  component: CadastrarUsuarioComponent,
},
{
  path: "usuario/listar",
  component: ListarUsuarioComponent,
},
{
  path: "itens/cadastrar",
  component: CadastrarItensComponent,
},
{
  path: "itens/listar",
  component: ListarItensComponent,
},
{
  path: "inventario/cadastrar",
  component: CadastrarInventarioComponent,
},
{
  path: "inventario/listar",
  component: ListarInventarioComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
