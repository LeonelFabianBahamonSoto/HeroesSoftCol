import { AfterViewInit, Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Hero } from '../../interfaces/PaginatedSuperheroes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-hero-card',
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './super-hero-card.component.html',
  styleUrl: './super-hero-card.component.scss'
})

export class SuperHeroCardComponent {
  private router = inject(Router);

  @Input() hero!: Hero;

  constructor() {}

  navigateToHeroDetails = (heroId: number) => {
    this.router.navigateByUrl(`heroes/hero/${heroId}`);
  }
}
