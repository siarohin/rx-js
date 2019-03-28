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


const s1$ = rxjs.from([1, 2, 3]);
const s2$ = rxjs.from([4, 5, 6]);

rxjs.range(1, 3)
    .pipe(rxjs.operators.map(x => rxjs.range(x, 3)))
    .pipe(rxjs.operators.concatAll())
    .subscribe(createSubscribe('concatAll'));