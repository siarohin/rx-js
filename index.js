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


const subject$ = new rxjs.ReplaySubject(2);

subject$.next(3);
subject$.next(5);
subject$.next(10);
subject$.complete();

subject$.subscribe(createSubscribe('replaySubject'));