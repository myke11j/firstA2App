import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from '../components/app.component';
import { HeroDetailComponent }  from '../components/hero-detail/hero-detail.component';
import { HeroesComponent }  from '../components/heroes/heroes.component';
import { DashboardComponent }  from '../components/dashboard/dashboard.component';
import { HeroService }  from '../services/hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  // Import all modules in this array
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // This array contains the list of all components, pipes, and directives
  // that we created and that belong in our application's module
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
