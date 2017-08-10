import { Component, Injectable } from '@angular/core';
import { Server } from './backend/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor(private server: Server) {}

  onClick() {
    this.server.updateHorse(this.server.newHorse());
  }
}