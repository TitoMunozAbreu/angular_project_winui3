import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FuncionalidadComponent } from './pages/funcionalidad/funcionalidad.component';
import { InstruccionComponent } from './pages/instruccion/instruccion.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full' },
  {path:'home', component: HomeComponent },
  {path:'funcionalidad', component: FuncionalidadComponent },
  {path:'instruccion', component: InstruccionComponent },
  {path:'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
