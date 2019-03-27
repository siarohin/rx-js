var stream$ = rxjs.Observable.create(function(observer) {
  observer.next(1);
  observer.complete();
  setTimeout(() => {
    observer.next(3);
  }, 3000);
  observer.next(4);
});

stream$.subscribe(function(data) {
  console.log(data); // console.log --> 1
});