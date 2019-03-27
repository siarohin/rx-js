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

rxjs.interval(500)
  .pipe(rxjs.operators.buffer(rxjs.interval(2000)))
  .pipe(rxjs.operators.take(3))
  .subscribe(createSubscribe('buffer'));