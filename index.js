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


rxjs.of('Hello')
    // .pipe(rxjs.operators.map(x => rxjs.range(x, 3)))
    .subscribe(x => rxjs.of(`${x} World`)
                        .subscribe(createSubscribe('mergeMap'))
    );