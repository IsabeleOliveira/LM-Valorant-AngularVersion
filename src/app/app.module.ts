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
import { PagesComponent } from './features/pages/pages.component';
import { LandingpageComponent } from './features/pages/landingpage/landingpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NoticiasComponent,
    AgentesComponent,
    SobreojogoComponent,
    FooterComponent,
    PagesComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
