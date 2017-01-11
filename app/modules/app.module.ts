import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from '../components/app.component';
import { HeroDetailComponent }  from '../components/hero-detail/hero-detail.component';
import { HeroesComponent }  from '../components/heroes/heroes.component';
import { DashboardComponent }  from '../components/dashboard/dashboard.component';
import { HeroService }  from '../services/hero.service';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../mock-server/in-memory-data.service';

@NgModule({
  // Import all modules in this array
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule
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
