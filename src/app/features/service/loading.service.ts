import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loadingSubject = signal<boolean>(false);

  constructor() { }
}
