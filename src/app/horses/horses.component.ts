import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../backend/server';
import { Horse } from './horse';

@Component({
  selector: 'horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})

@Injectable()
export class HorsesComponent implements OnInit {
	private horseList: Horse[];
	private currentHorse: Horse;

	constructor(private server: Server, private route: ActivatedRoute) {}

	ngOnInit() {
		this.server.currentHorse.subscribe(horse => this.currentHorse = horse);
		this.server.currentHorseList.subscribe(horseList => this.horseList = horseList);
		this.route.firstChild.params.subscribe(params => {
			let id = +params['id'],
				horse: Horse;

			this.server.getHorse(id).then(horse => this.updateHorse(horse)).catch(() => this.updateHorse(null)); 
		});
	}

	updateHorse(horse) {
		horse = horse || this.server.newHorse();
		this.server.updateHorse(horse);
	}
}