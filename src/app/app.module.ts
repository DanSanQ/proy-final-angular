import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { FooterComponent } from './footer/footer.component';
import { MarioComponent } from './mario/mario.component';
import { ZeldaComponent } from './zelda/zelda.component';
import { StreetfComponent } from './streetf/streetf.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarruselComponent,
    ContenidoComponent,
    FooterComponent,
    MarioComponent,
    ZeldaComponent,
    StreetfComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
