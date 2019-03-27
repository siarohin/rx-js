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

rxjs.interval(1000)
  .pipe(rxjs.operators.skipWhile(x => x < 10))
  .pipe(rxjs.operators.take(5))
  .subscribe(createSubscribe('skipWhile'));