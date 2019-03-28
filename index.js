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


const subject$ = new rxjs.AsyncSubject();

subject$.next(1);
subject$.next('WFM');
subject$.complete();

subject$.subscribe(createSubscribe('asyncSubject'));

// --> WFM