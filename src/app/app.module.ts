import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/components/header/header.component';
import { HomeComponent } from './features/components/home/home.component';
import { NoticiasComponent } from './features/components/noticias/noticias.component';
import { AgentesComponent } from './features/components/agentes/agentes.component';
import { SobreojogoComponent } from './features/components/sobreojogo/sobreojogo.component';
import { FooterComponent } from './features/components/footer/footer.component';
import { LandingpageComponent } from './features/pages/landingpage/landingpage.component';
import { LoginComponent } from './features/pages/login/login.component';
import { CadastroComponent } from './features/pages/cadastro/cadastro.component';
import { AcessibilitybarComponent } from './features/components/acessibilitybar/acessibilitybar.component';
import { FormCadastroComponent } from './features/pages/cadastro/components/form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './features/pages/login/components/form-login/form-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NoticiasComponent,
    AgentesComponent,
    SobreojogoComponent,
    FooterComponent,
    LandingpageComponent,
    LoginComponent,
    CadastroComponent, 
    AcessibilitybarComponent, 
    FormCadastroComponent, 
    FormLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
