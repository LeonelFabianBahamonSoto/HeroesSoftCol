import { Location } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';

import { finalize, Subject, takeUntil } from 'rxjs';

import { Hero } from '../../interfaces/PaginatedSuperheroes.interface';

import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-hero-detail',
  imports: [],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})

class HeroDetailComponent implements OnInit {
  private destroy$ = new Subject<void>();

  private location = inject(Location);
  private route = inject(ActivatedRoute);

  private heroesService = inject(HeroesService);
  private loadingService = inject(LoadingService);

  private hero = signal<Hero | undefined>( undefined );
  public heroComp = computed(() => this.hero());

  constructor() {};

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    let heroId: string | number = this.route.snapshot.paramMap.get('id') ?? '1';
    heroId = parseInt(heroId, 10);
    this.heroesRequestById(heroId);
  }

  goBack = (): void => {
    this.location.back();
  }

  heroesRequestById = (heroId: number): void => {
    this.loadingService.loadingSubject.set(true);

    this.heroesService.findSuperheroById(heroId)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loadingService.loadingSubject.set(false))
      )
      .subscribe({
        next: (response) => {
          this.hero.set(response);
        },
        error: (error) => {
          console.info('Error: ', error);
          this.loadingService.loadingSubject.set(false);
        }
      })
  }
}

export default HeroDetailComponent;
