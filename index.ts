import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie');
    //subscriber.complete();
  }, 2000);

  setTimeout(() => {
    subscriber.error(new Error('Boom'));
  }, 4000);

  return () => {
    console.log('TearDown');
  };
});

console.log('Before subscribe');
observable$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('completed'),
  error: (error) => {
    console.log('had an error');
    console.log(error.message);
  },
});
console.log('After subscribe');
