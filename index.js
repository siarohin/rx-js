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

const s1$ = rxjs.of('Hello');
const s2$ = rxjs.of('World');

rxjs.zip(s1$, s2$.pipe(rxjs.operators.delay(5000)))
    .subscribe(createSubscribe('zip'));