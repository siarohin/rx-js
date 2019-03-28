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

const promise = (data) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${data} wish you good luck!`);
    }, 2000);
  });
};

rxjs.of('WFM')
    .pipe(rxjs.operators.mergeMap(x => promise(x)))
    .subscribe(createSubscribe('promise'))