import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 1, name: 'War and Peace', category: 'classical', price: 100 },
      { id: 2, name: 'A Tale of Two Cities', category: 'classical', price: 30},
      { id: 3, name: 'The Rip Van Winkle', category: 'classical', price: 250},
      { id: 4, name: 'CLRS', category: 'Algorithms', price: 500 },
      { id: 5, name: 'The Dragon Book', category: 'Computer Science', price: 73 },
      { id: 6, name: 'Calculus', category: 'Mathematics', price: 100 },
      { id: 7, name: "You Dont't know JS", category: 'Web Develoment', price: 240 },
      { id: 8, name: 'Don Quixote', category: 'classical', price: 10 },
      { id: 9, name: 'The Idiot', category: 'classical', price: 80 },
      { id: 10, name: 'A Song of Ice and Fire', category: 'Fantasy', price: 900 }
    ];
    return {books};
  }
}
