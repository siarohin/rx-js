const button = document.querySelector('button');

const btn$ = rxjs.fromEvent(button, 'click');

btn$.subscribe((e) => console.log(e));