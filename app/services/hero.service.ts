import { Injectable } from '@angular/core';

import { Hero } from '../classes/hero';
import { HEROES } from '../config/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
   return this.getHeroes()
              .then(heroes => heroes.find(hero => hero.id === id));
 }
}
