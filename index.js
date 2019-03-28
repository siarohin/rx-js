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

const s1$ = rxjs.throwError(new Error('Something was wrong!'));

const s2$ = rxjs.interval(500)
    .pipe(rxjs.operators.take(2));

s1$.pipe(rxjs.operators.onErrorResumeNext(s2$))
    .subscribe(createSubscribe('onErrorResumeNext'));