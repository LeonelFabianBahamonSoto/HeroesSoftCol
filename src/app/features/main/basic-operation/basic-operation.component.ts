import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeContentContainerComponent } from "../../components/home-content-container/home-content-container.component";

@Component({
  selector: 'app-basic-operation',
  imports: [
    HomeContentContainerComponent,
],
  templateUrl: "./basic-operation.component.html",
  styleUrl: './basic-operation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

class BasicOperationComponent {

  constructor() {};

}

export default BasicOperationComponent;
