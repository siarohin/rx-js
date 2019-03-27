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
  .subscribe(x => {
    return rxjs.from(cars)
      .pipe(rxjs.operators.filter(c => c.name === x))
      .subscribe(val => {
        document.querySelector('div')
          .innerHTML = val.name + ' ' + val.price;
      });
  });