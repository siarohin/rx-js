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


const s1$ = rxjs.interval(1000)
                .pipe(rxjs.operators.map(x => `Stream 1: ${x}`))
                .pipe(rxjs.operators.take(5));
const s2$ = rxjs.interval(500)
                .pipe(rxjs.operators.map(x => `Stream 2: ${x}`))
                .pipe(rxjs.operators.take(5));

rxjs.merge(s1$, s2$)
    .subscribe(createSubscribe('merge'));