import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Rutas
import {APP_ROUTING} from './app.routes'
// Servicios
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesService } from './servicios/heroes.service';
import { DefinicionHeroeComponent } from './components/definicion-heroe/definicion-heroe.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    DefinicionHeroeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    APP_ROUTING,
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
