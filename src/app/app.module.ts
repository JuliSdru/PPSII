import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RegistroComponent } from './components/registro/registro.component';



import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from'@angular/material/menu';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GoogleMapsModule } from '@angular/google-maps';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ABMProductoComponent } from './components/abmproducto/abmproducto.component';
import { ListProductUserComponent } from './components/list-product-user/list-product-user.component';
import { HeaderComponent } from './components/header/header.component';
import { CanAdminGuard } from './guards/canAdmin.guard';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AbmEmpleadoComponent } from './components/abm-empleado/abm-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    CarritoComponent,
    ProductoComponent,
    ABMProductoComponent,
    ListProductUserComponent,
    HeaderComponent,
    ContactoComponent,
    AbmEmpleadoComponent,
    ListEmpleadoComponent,

  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 //   AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    GoogleMapsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule],
  providers: [CanAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
