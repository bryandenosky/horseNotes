import { Component, Injectable, OnInit } from '@angular/core';
import { Server } from '../../backend/server';
import { Horse } from '../horse';

@Component({
  selector: 'horses-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

@Injectable()
export class HorsesView implements OnInit {
	private currentHorse: Horse;

	constructor(private server: Server) {}

	ngOnInit() {
		this.server.currentHorse.subscribe(horse => this.currentHorse = horse);
	}
}
