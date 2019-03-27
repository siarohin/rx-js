var stream$ = rxjs.Observable.create(function(observer) {
  observer.next(1);
  observer.next(2);
  setTimeout(() => {
    observer.next(3);
  }, 3000);
  observer.next(4);
  observer.complete();
});

stream$
  .subscribe(
    function(data) {
      console.log(`Subscribe: ${data}`);
    },
    function(error) {
      console.log(`Error: ${error}`);
    },
    function(completed) {
      console.log(`Completed!`);
    }
  );

  // --> console.log  1, 2, 4, Completed!