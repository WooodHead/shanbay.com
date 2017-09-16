$(document).ready(
  function () {
    console.log('ready')
    var $input = $('.search-input')
    var $clear = $('.clear-btn')

    $input.on('focus', function (e) {
      $clear.parent().addClass('focus')
    })

  }
)