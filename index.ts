import { from } from 'rxjs';

 
from(['alice','ben','charlie','from']).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('completed'),
  error: (error) => {
    console.log('had an error');
    console.log(error.message);
  }
}); 
