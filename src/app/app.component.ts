import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-user',
//   // template:`Hello Universe`,
//   template:`
//   Username : {{ username }}`,
//   styles:`
//   :host{
//     color:#a144eb;
//   }
//   `,
//   standalone: true,
//   imports: [RouterOutlet],
//   // templateUrl: './app.component.html',
//   // styleUrl: './app.component.css'
// })
// export class UserComponent {
//   username = `Nathan`;
// }


@Component({
  selector: 'app-root',
  // template:`Hello Universe`,
  template:`
 
  @if (isServerRunning) {
    <span>Yes, the server is running</span>
    } @else {
    <span>No, the server is not running</span>
    }

  `,
  styles:`
  :host{
    color:#a144eb;
  }
  `,
  standalone: true,
  imports: [RouterOutlet,],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  isServerRunning = true ;
}
