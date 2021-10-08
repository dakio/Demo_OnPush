import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {
  @Input() public model: User;

  public get nameAge(): string {
    console.log('call getter'); // this is called for each change detection
    return `${this.model.name} ${this.model.age}`;
  }

  public helloDoSomething(): void {
    this.model.name = 'Hello - Dat';
  }
}
export class User {
  constructor(public name: string, public age: number) {}
}
