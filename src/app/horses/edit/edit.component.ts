import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Server } from '../../backend/server';
import { Horse } from '../horse';

@Component({
  selector: 'horses-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

@Injectable()
export class HorsesEdit implements OnInit {
  private currentHorse: Horse;
  
  constructor(private server: Server, private router: Router) {}

  ngOnInit() {
    this.server.currentHorse.subscribe(horse => this.currentHorse = horse);
  }
    
  onSubmit() {
    this.server.saveHorse(this.currentHorse).then(horse => {
      this.server.updateHorse(horse);
      this.router.navigate(['/horses/' + horse.id]);
    });
  }
}
