$(document).ready(function () {

  var $input = $('#searchinput');
  var $clear = $('#searchclear');

  $input.on('focus', function () {
    $clear.parent().addClass("focus");
    $clear.removeClass("hide");
  });

  $input.on('blur', function (e) {
    if (!$input.val().trim()) {
      $input.parent().removeClass("focus");
      $clear.addClass("hide");
    }
  });

  $clear.on('click', function (e) {
    // e.stopPropagation();
    // e.preventDefault();
    // console.log('click');
    if ($input.val()) {
      $input.val('');
      $input.focus();
    }
  })

});