import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DATABASE implements InMemoryDbService {
  createDb() {
    let data = [
      {
        id: 1,
        name: 'Always Dreaming',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Always_Dreaming.jpg/220px-Always_Dreaming.jpg',
        description: 'An American Thoroughbred racehorse (Foaled February 25, 2014), he won the Florida Derby in his first graded stakes race appearance, and then won the 2017 Kentucky Derby.'
      }
    ];
    return {data};
  }
}