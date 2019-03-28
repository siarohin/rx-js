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

const int$ = new rxjs.interval(1000);

int$.subscribe(subject$);

subject$.subscribe(createSubscribe('subject 1'));