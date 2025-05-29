import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarNavigationService } from '../services/bar-navigation.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'app-sidebar',
  styleUrl: './sidebar.component.scss',
  templateUrl: './sidebar.component.html',
})

class SidebarComponent {
  private barNavigationService = inject(BarNavigationService);

  public sidebarOverlay = this.barNavigationService.sidebarOverlay;
  public isUsersMenuOpen = false;
  public menuOptionOne = [
    {title: 'option one 1', icon: 'fa-solid fa-face-smile', url: '',},
    {title: 'option one 2', icon: 'fa-solid fa-face-smile-wink', url: '',}
  ];
  public menuOptionTwo = [
    {title: 'option 1', icon: 'fa-solid fa-face-smile', url: '',},
    {title: 'option 2', icon: 'fa-solid fa-face-smile-wink', url: '',}
  ];
  public dropdownList = [
    {title: 'Drop option one 1', icon: 'fa-solid fa-face-smile', url: '',},
    {title: 'Drop option one 2', icon: 'fa-solid fa-face-smile-wink', url: '',}
  ];

  constructor(){};

  toggleUsersMenu(): void {
    this.isUsersMenuOpen = !this.isUsersMenuOpen;
  }
  // public sidebarToggle = document.querySelector('.sidebar-toggle');
  // public sidebarOverlay = document.querySelector('.sidebar-overlay'); ---> OK
  // public sidebarMenu = document.querySelector('.sidebar-menu');
  // public main = document.querySelector('.main');

  // startSidebar = () => {
  //   this.sidebarToggle.addEventListener('click', function (e: any) {
  //     e.preventDefault()
  //     this.main.classList.toggle('active')
  //     this.sidebarOverlay.classList.toggle('hidden')
  //     this.sidebarMenu.classList.toggle('-translate-x-full')
  //   })

  //   this.sidebarOverlay.addEventListener('click', function (e: any) {
  //     e.preventDefault()
  //     this.main.classList.add('active')
  //     this.sidebarOverlay.classList.add('hidden')
  //     this.sidebarMenu.classList.add('-translate-x-full')
  //   })

  //   document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function (item) {
  //     item.addEventListener('click', function (e: any) {
  //       e.preventDefault()
  //       const parent = item.closest('.group')
  //       if (parent.classList.contains('selected')) {
  //         parent.classList.remove('selected')
  //       } else {
  //         document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function (i) {
  //           i.closest('.group').classList.remove('selected')
  //         })
  //         parent.classList.add('selected')
  //       }
  //     })
  //   })
  // }


}

export default SidebarComponent;
