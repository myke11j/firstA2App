import { Component, Input } from '@angular/core';
import { Hero } from '../../classes/hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/components/hero-detail/hero-detail.component.html',
  styles: []
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
