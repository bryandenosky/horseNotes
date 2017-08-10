import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { DATABASE } from './database';
import { Horse} from '../horses/horse';

@Injectable()
export class Server {
  private api = 'api/data';
  private headers = new Headers({'Content-Type': 'application/json'});

  public currentHorse: Observable<Horse>;
  private currentHorseSubject = new BehaviorSubject<Horse>(null);

  public currentHorseList: Observable<Horse[]>;
  private currentHorseListSubject = new BehaviorSubject<Horse[]>(null);

  constructor(private http: Http) {
    this.currentHorse = this.currentHorseSubject.asObservable();
    this.currentHorseList = this.currentHorseListSubject.asObservable();
  }

  httpBuilder(url, type, obj) {
    let builder,
        returnFunc = (response => response.json().data as Horse);
    
    obj = JSON.stringify(obj);

    switch(type) {
      case 'post':
        builder = this.http.post(url, obj, {headers: this.headers});
        break;
      case 'put':
        builder = this.http.put(url, obj, {headers: this.headers});
        returnFunc = (() => JSON.parse(obj) as Horse);
        break;
      default:
        builder = this.http.get(url);
        break;
    }

    return builder.toPromise().then(returnFunc);
    
  }

  getHorse(id): Promise<Horse> {
    return this.httpBuilder(this.api + '/' + id, 'get', null);
  }

  getHorseList(): Promise<Horse[]> {
    return this.httpBuilder(this.api, 'get', null);
  }

  newHorse(): Horse {
    return {
      id: null,
      name: 'Starter Horse',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Twilight20008-300.jpg/220px-Twilight20008-300.jpg',
      description: 'This is starter horse info.'
    };
  }

  saveHorse(horse: Horse): Promise<Horse> {
    if(horse.id) {
      return this.httpBuilder(this.api + '/' + horse.id, 'put', horse);
    } else {
      return this.httpBuilder(this.api, 'post', horse);
    }
  }

  updateHorse(horse: Horse) {
    this.currentHorseSubject.next(horse);
    this.getHorseList().then(horseList => this.updateHorseList(horseList));
  }

  updateHorseList(horseList: Horse[]) {
    this.currentHorseListSubject.next(horseList);
  }
}
