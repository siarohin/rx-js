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

const set = new Set([1, 2, 3, '4', '5', {id: 6}]);

rxjs.from(set)
  .subscribe(createSubscribe('from'));