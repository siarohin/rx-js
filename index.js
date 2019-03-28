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


const subject$ = new rxjs.Subject();

subject$.subscribe(createSubscribe('subject'));

subject$.next(1);
subject$.next(5);

setTimeout(() => {
  subject$.complete();
}, 3000);

