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


const interval$ = rxjs.interval(1000);

rxjs.zip(interval$)
    .subscribe(createSubscribe('zip'));