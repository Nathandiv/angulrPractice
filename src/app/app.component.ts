import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  // template:`Hello Universe`,
  template:`
  Username : {{ username }}`,
  styles:`
  :host{
    color:#a144eb;
  }
  `,
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class UserComponent {
  username = `Nathan`;
}


@Component({
  selector: 'app-root',
  // template:`Hello Universe`,
  template:`
  <section>
  <app-user/>
  </section>
  `,
  styles:`
  :host{
    color:#a144eb;
  }
  `,
  standalone: true,
  imports: [RouterOutlet,UserComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {}
