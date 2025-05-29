import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-container',
  imports: [
    MenuComponent,
    RouterModule,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

class ContainerComponent { }

export default ContainerComponent;
