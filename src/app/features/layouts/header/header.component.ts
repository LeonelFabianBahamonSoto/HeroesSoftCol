import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { BarNavigationService } from '../services/bar-navigation.service';

interface HeaderMenu {
  alertIsClosed: boolean;
  searchEngineIsClosed: boolean;
  userMenuIsClosed: boolean;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    ReactiveFormsModule,
  ],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})

class HeaderComponent {
  private barNavigationService = inject(BarNavigationService);

  public sidebarOverlay = this.barNavigationService.sidebarOverlay;
  public menuState: HeaderMenu = {
    alertIsClosed: true,
    searchEngineIsClosed: true,
    userMenuIsClosed: true,
  };

  public searchWord: FormControl = new FormControl( '', [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ] );

  constructor() {
    this.searchWord.valueChanges.subscribe(value => this.handleSearch(value));
  };

  handleHeaderButton = (buttonName: keyof HeaderMenu): void => {
    for(const key in this.menuState){
      if(key !== buttonName) this.menuState[key as keyof HeaderMenu] = true;
    }

    this.menuState[buttonName] = !this.menuState[buttonName];
  }

  startSidebar = (): void => {
    this.barNavigationService.sidebarOverlay.set(!this.barNavigationService.sidebarOverlay())
  }

  handleSearch = (value: string): void => {
    if(value.length < 3) return;
  }
}

export default HeaderComponent;
