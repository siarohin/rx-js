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
  .pipe(rxjs.operators.skipWhile(x => x < 5))
  .pipe(rxjs.operators.takeWhile(x => x < 10))
  .subscribe(createSubscribe('takeWhile'));

  // --> 5, 6, 7 ,8, 9