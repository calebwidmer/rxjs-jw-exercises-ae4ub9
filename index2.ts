import { forkJoin, from, Observable, Subscriber } from 'rxjs';

const a$  = new Observable(subscriber =>{

  setTimeout(()=> {
  subscriber.next('A');
  subscriber.complete()
},3000);

return () => {
  console.log(' A  teardown');
}
});


const b$  = new Observable(subscriber =>{

  setTimeout(()=> {
  subscriber.error('Failure, sub never finished so forkjoin sub never gets invoked');
  subscriber.complete()
},5000);

return () => {
  console.log(' B teardown');
}
});


 forkJoin([a$,b$]).subscribe({
   next: v=> console.log(v),
   error: err=> console.log('error:', err)
 });