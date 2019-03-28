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
    .pipe(rxjs.operators.map(x => rxjs.range(1, 3)))
    .pipe(rxjs.operators.mergeAll())
    .subscribe(createSubscribe('merge'));