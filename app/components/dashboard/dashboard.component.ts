import { Component, OnInit } from '@angular/core';

import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/dashboard/dashboard.component.html',
  styleUrls: [ 'app/components/dashboard/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes)
  }
}
