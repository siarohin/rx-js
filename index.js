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

// const promise = (data) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`${data} wish you good luck!`);
//     }, 2000);
//   });
// };

rxjs.range(1, 10)
    .pipe(rxjs.operators.concatMap((x, i) => {
      return rxjs.interval(100)
                  .pipe(rxjs.operators.take(x))
                  .pipe(rxjs.operators.map(y => i));
    }))
    .subscribe(createSubscribe('concatMap'));