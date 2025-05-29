import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarNavigationService {

  public sidebarOverlay = signal<boolean>(true);

  constructor() {}

}
