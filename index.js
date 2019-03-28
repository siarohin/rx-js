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


const subject$ = new rxjs.BehaviorSubject('WFM');

subject$.subscribe(createSubscribe('behaviorSubject'));

subject$.next('Hello');