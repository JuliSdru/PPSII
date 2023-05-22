import { ProductoComponent } from './components/producto/producto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HttpClientModule } from '@angular/common/http';
import { ABMProductoComponent } from './components/abmproducto/abmproducto.component';
import { ListProductUserComponent } from './components/list-product-user/list-product-user.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'main'},
  {
    path: 'main', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'carrito', component: CarritoComponent
  },
    {
      path: 'producto', component: ABMProductoComponent  },

{
      path: 'listProducto', component: ListProductUserComponent  }

]

@NgModule({

  imports: [ RouterModule.forRoot(routes) ,
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
