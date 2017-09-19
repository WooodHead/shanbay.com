$(document).ready(
  function () {
    console.log('ready')
    var $input = $('.search-input')
    var $clear = $('.clear-btn')

    $input.on('focus', function (e) {
      $input.parent().addClass('focus')
    })

    $input.on('blur', function (e) {
      $input.parent().removeClass('focus')
    })
  }

)