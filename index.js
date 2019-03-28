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


// rxjs.range(1, 3)
//     .pipe(rxjs.operators.map(x => rxjs.range(1, 3)))
//     .pipe(rxjs.operators.mergeAll())
//     .subscribe(createSubscribe('merge'));

const s1$ = rxjs.from([1, 2, 3]);
const s2$ = rxjs.from([4, 5, 6]);

rxjs.concat(s1$, s2$)
    .subscribe(createSubscribe('concat'));