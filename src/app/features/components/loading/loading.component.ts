import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-loading',
  imports: [
    NgIf
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  private loadingService = inject(LoadingService);

  public isLoading = this.loadingService.loadingSubject;

  constructor(){};
}
