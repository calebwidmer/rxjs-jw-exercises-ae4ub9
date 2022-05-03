import { forkJoin, from, Observable, Subscriber } from 'rxjs';

const a$  = new Observable(subscriber =>{

  setTimeout(()=> {
    subscriber.next('A-1');
    subscriber.next('A-2');
    subscriber.next('A-3');
  subscriber.complete()
},1000);

return () => {
  console.log(' A  teardown');
}
});

const b$  = new Observable(subscriber =>{

  setTimeout(()=> {
  subscriber.next('B-1');
  subscriber.next('B-2');
  subscriber.complete()
},3000);

return () => {
  console.log(' B  teardown');
}
});

 forkJoin([a$,b$]).subscribe({
   next: v=> console.log(v),
   error: err=> console.log('error:', err)
 });