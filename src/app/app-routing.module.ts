import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './features/pages/cadastro/cadastro.component';
import { LandingpageComponent } from './features/pages/landingpage/landingpage.component';
import { LoginComponent } from './features/pages/login/login.component';



const routes: Routes = [
  {path: '', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path:'cadastro',component: CadastroComponent},
  {path:'index', component: LandingpageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
