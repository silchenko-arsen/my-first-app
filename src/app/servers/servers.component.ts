import { Component } from '@angular/core';
import { ServerComponent } from "../server/server.component";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  standalone: true,
  imports: [
    ServerComponent
  ],
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer= false;
  serverCreationStatus = 'No server was created!';

  /*constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }*/

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }
}

