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

rxjs.fromEvent(document.querySelector('input'), 'input')
  .pipe(rxjs.operators.pluck('target', 'value'))
  .pipe(rxjs.operators.map(e => e.toUpperCase()))
  .pipe(rxjs.operators.map(e => {
    return {
      e,
      length: e.length,
    }
  }))
  .subscribe(createSubscribe('map'));