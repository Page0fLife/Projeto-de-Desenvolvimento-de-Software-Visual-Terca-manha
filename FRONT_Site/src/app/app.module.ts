import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CadastrarUsuarioComponent } from './components/Usuario/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarItensComponent } from './components/Itens/cadastrar-itens/cadastrar-itens.component';
import { CadastrarInventarioComponent } from './components/Inventario/cadastrar-inventario/cadastrar-inventario.component';
import { ListarUsuarioComponent } from './components/Usuario/listar-usuario/listar-usuario.component';
import { ListarItensComponent } from './components/Itens/listar-itens/listar-itens.component';
import { ListarInventarioComponent } from './components/Inventario/listar-inventario/listar-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarUsuarioComponent,
    CadastrarItensComponent,
    CadastrarInventarioComponent,
    ListarUsuarioComponent,
    ListarItensComponent,
    ListarInventarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
