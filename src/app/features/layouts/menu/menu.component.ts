import { ChangeDetectionStrategy, Component } from '@angular/core';

import HeaderComponent from "../header/header.component";
import SidebarComponent from "../sidebar/sidebar.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    SidebarComponent,
],
  selector: 'app-menu',
  styleUrl: './menu.component.css',
  templateUrl: './menu.component.html',
})

export class MenuComponent {}
