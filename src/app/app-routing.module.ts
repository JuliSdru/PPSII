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
import { HeaderComponent } from './components/header/header.component';
import { CanAdminGuard } from './guards/canAdmin.guard';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { AbmEmpleadoComponent } from './components/abm-empleado/abm-empleado.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'main'},
  {
    path: 'main', component: HomeComponent,
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
    path: 'header', component: HeaderComponent
  },
  {
    path: 'productoUser', component: ProductoComponent  
  },
  {
    path: 'producto', component: ABMProductoComponent  
  },
  {
    path: 'listProducto', component: ListProductUserComponent  
  },
  {
    path: 'contacto', component: ContactoComponent 
  },        
  {
    path: 'listEmpleado', component: ListEmpleadoComponent  
  },
  {
    path: 'empleado', component: AbmEmpleadoComponent  
  }
  

]

@NgModule({

  imports: [ RouterModule.forRoot(routes) ,
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
