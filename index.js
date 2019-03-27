var stream$ = rxjs.Observable.create(function(observer) {
  observer.next(1);
  observer.next(2);
  setTimeout(() => {
    observer.next(3);
  }, 3000);
  observer.next(4);
});

stream$.subscribe(function(data) {
  console.log(data);
});