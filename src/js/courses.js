$(document).ready(function () {
  var $input = $('#search-input')
  var $clear = $('#clear-btn')
  $input.on('focus', function () {
    console.log('focus')
    $input.parent().addClass('focus')
  })

  $clear.on('click', function (e) {
    $input.val('clear').focus()
  })

  $input.on('blur', function (e) {
    console.log('blur')
    if ($input.val().trim() === '') {
      $input.parent().removeClass('focus')
    }
  })

})