import { Component, Input } from '@angular/core';
import { Horse } from '../horse';

@Component({
  selector: 'horse-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class HorseProfile {
	@Input() horse: Horse;
}