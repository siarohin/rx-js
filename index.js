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

rxjs.of(1, 5, 'hello', 'world')
  .pipe(rxjs.operators.find(x => x === 5))
  .subscribe(createSubscribe('find'));