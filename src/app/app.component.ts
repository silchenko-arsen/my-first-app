import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ServerComponent} from "./server/server.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [`
    h3{
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'my-first-app';
}
