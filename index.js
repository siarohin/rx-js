rxjs.of(5, 'qwerty', 101, [4, 2, 45])
  .subscribe(
      x => console.log(`Next: ${x}`),
      (error) => console.log(`Error: ${error}`),
      () => console.log('Completed!')
    );