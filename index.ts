import { combineLatest, forkJoin, from, Observable, Subscriber } from 'rxjs';

const a$  = new Observable(subscriber =>{

  setTimeout(()=> {
    subscriber.next('A-1');
},1020);
setTimeout(()=> {
  subscriber.next('A-2');
},1800);
setTimeout(()=> {
  subscriber.next('A-3');
  subscriber.complete();
},1900);



return () => {
  console.log(' A  teardown');
}
});

const b$  = new Observable(subscriber =>{

  setTimeout(()=> {
    subscriber.next('B-1');
},1120);
setTimeout(()=> {
  subscriber.next('B-2');
  //subscriber.complete();
},1850);
setTimeout(()=> {
  subscriber.next('B-3');
  subscriber.complete();
},1990);


return () => {
  console.log(' B  teardown');
}
});

 combineLatest([a$,b$]).subscribe({
   next: ([Ah,Be])=> console.log(Be,Ah),
   error: err=> console.log('error:', err)
 });