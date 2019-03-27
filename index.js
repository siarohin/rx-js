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

const cars = [
  {
    name: 'Audi',
    price: 500,
  },
  {
    name: 'BMW',
    price: 400,
  },
  {
    name: 'Ford',
    price: 200,
  },
];

rxjs.fromEvent(document.querySelector('input'), 'input')
  .pipe(rxjs.operators.map(e => e.target.value))
  .pipe(rxjs.operators.debounceTime(1500))
  .subscribe(createSubscribe('debounceTime'));