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

rxjs.of('aleksandr', 'people', 'done')
  .pipe(rxjs.operators.map(x => x.toUpperCase()))
  .subscribe(createSubscribe('map'));