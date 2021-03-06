import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimeraDirectivaDirective } from './mi-primera-directiva.directive';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimeraDirectivaDirective,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
