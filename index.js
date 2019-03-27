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

rxjs.range(1, 3)
  .pipe(rxjs.operators.tap(x => console.log('Before', x)))
  .pipe(rxjs.operators.map(x => x * 2))
  .pipe(rxjs.operators.tap(x => console.log('After', x)))
  .subscribe(createSubscribe('tap'));