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


rxjs.from([1, 1, 1, 2, 2, 5, 6, 1, 9, 9, 7, 7, 7])
  .pipe(rxjs.operators.distinctUntilChanged())
  .subscribe(createSubscribe('from'));