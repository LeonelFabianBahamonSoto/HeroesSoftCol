import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { NgxPaginationModule } from 'ngx-pagination';
import { finalize, Subject, takeUntil } from 'rxjs';

import { SuperHeroCardComponent } from "../super-hero-card/super-hero-card.component";

import { Hero } from '../../interfaces/PaginatedSuperheroes.interface';

import { HeroesService } from '../../service/heroes.service';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-home-content-container',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    SuperHeroCardComponent,
],
  templateUrl: './home-content-container.component.html',
  styleUrl: './home-content-container.component.scss'
})

export class HomeContentContainerComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  private heroesService = inject(HeroesService);
  private loadingService = inject(LoadingService);

  private heroesList = signal<Hero[]>([]);
  public heroesListComp = computed(() => this.heroesList());

  private paginationConfig = signal({
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 50,
  });
  public paginationConfigComp = computed(() => this.paginationConfig());

  public itemsPerPage = [5, 10, 20];
  public itemsPerPageControl = new FormControl(10);

  constructor() { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.handlingHeroesRequest(1, 10);
  }

  handlingItemsPerPage = ( itemsNumber: MatSelectChange | number ): void => {
    const itemsPerPage: number = typeof itemsNumber === 'number' ? itemsNumber : itemsNumber.value;

    this.handlingHeroesRequest(1, itemsPerPage);
  }

  handlingHeroesRequest = (page: number, itemsNumber: number): void => {
    this.loadingService.loadingSubject.set(true);

    // const itemsPerPage: number = typeof itemsNumber === 'number' ? itemsNumber : itemsNumber.value;

    this.paginationConfig.update((data) => ({ ...data, currentPage: page }));

    this.heroesRequest(page, itemsNumber);
  }

  heroesRequest = (page: number, itemsPerPage: number): void => {
    this.heroesService.getPaginatedHeroes(page, itemsPerPage)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loadingService.loadingSubject.set(false))
      )
      .subscribe({
        next: (response) => {
          this.heroesList.set(response.items);
          this.paginationConfig.update((data) => ({ ...data, totalItems: response.lastPage * 10 }));
        },
        error: (error) => {
          console.info('Error: ', error);
          this.paginationConfig.update((data) => ({ ...data, currentPage: 1 }));
        }
      })
  }
}
