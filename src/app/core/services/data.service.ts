import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  // Create Faker DB
  createDb() {
    const users = [
      { id: 1, name: 'Rodrigo', phone: '123123' },
      { id: 1, name: 'Lilian', phone: '123123' },
      { id: 1, name: 'Samuel', phone: '123123' },
    ];
    return { users };
  }
}
