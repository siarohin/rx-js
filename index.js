function getUserById(id) {
  const params ={
    access_token: 'b3415dcf245787a12cf88a1682c62e03620655bb780c4d2515f101d6a469a6dd62b154e3184992919e242',
    user_ids: id,
    fields: 'photo_big',
  };

  return $.ajax({
    url: 'https://api.vk.com/method/users.get?' + $.param(params) + '&v=5.92',
    type: 'GET',
    dataType: 'JSONP'
    }).promise();
}


rxjs.fromEvent($('.main__input'), 'keyup')
    .pipe(rxjs.operators.pluck('target', 'value'))
    .pipe(rxjs.operators.distinct())
    .pipe(rxjs.operators.debounceTime(2000))
    .pipe(rxjs.operators.mergeMap(value => getUserById(value)))
    .pipe(rxjs.operators.map(x => x.response[0]))
    .subscribe(
        (user) => {
          $('.info-title').html(`${user.first_name} ${user.last_name} <span class="info-id">uid: ${user.id}</span>`);
          $('.info-photo').attr('src', user.photo_big);
        },
        error => console.log(error),
        () => console.log('Completed')
    );

