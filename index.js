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
  .pipe(rxjs.operators.skipUntil(rxjs.timer(3000)))
  .pipe(rxjs.operators.takeUntil(rxjs.timer(10000)))
  .subscribe(createSubscribe('skipUntil'));