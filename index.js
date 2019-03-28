function createSubscribe(name = '') {
  return {
    next(x) {
      console.log(name, ': ', x);
    },
    error(err) {
      console.log(`Error: ${err}`);
    },
    complete() {
      console.log(name, ': Completed');
    }
  };
}


const timer1$ = rxjs.timer(1000, 2000);
const timer2$ = rxjs.timer(2000, 2000);
const timer3$ = rxjs.timer(3000, 2000);


rxjs.combineLatest(timer1$, timer2$, timer3$)
    .pipe(rxjs.operators.take(10))
    .subscribe(createSubscribe('combineLatest'));