function getUserById(id) {
  const params ={
    access_token: 'b3415dcf245787a12cf88a1682c62e03620655bb780c4d2515f101d6a469a6dd62b154e3184992919e242',
    user_ids: id,
    fields: 'photo_big',
  };

  return $.ajax({
    url: 'https://api.vk.com/method/users.get?' + $.param(params),
    type: 'GET',
    dataType: 'JSONP'
    }).promise();
}

