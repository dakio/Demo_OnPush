import { Component } from '@angular/core';
import { User } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public model: User = new User('TDV', 18);

  public appDoSomething(): void {
    this.model.name = 'App - Dat';
  }
}
