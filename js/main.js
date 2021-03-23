"use strict"

$(function () {
  $('#btt').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 600);
  });
});