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

// rxjs.range(0, 40)
//   .pipe(rxjs.operators.bufferCount(5))
//   .subscribe(createSubscribe('bufferCount'));

rxjs.interval(1000)
  .pipe(rxjs.operators.buffer(rxjs.fromEvent(document, 'click')))
  .pipe(rxjs.operators.map(x => x.length))
  .subscribe(createSubscribe('buffer'));