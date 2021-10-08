import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from './hello.component';

@Component({
  selector: 'grandChild',
  templateUrl: './grandChild.component.html',
  styles: [`h1 { font-family: Lato; }`],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent {
  @Input() public model: User;

  public grandDoSomething(): void {
    //this.model.name = 'Grandchild - Dat';
    // this will trigger change detection for Hello component because
    // it is child component of Hello component and trigger DOM event
  }
}

// App changes will not affect GrandChild regardless commentted/uncommentted this line
// Commentted => Changes in Hello will apply
// Uncommentted => Changes in Hello will not apply (detached)
