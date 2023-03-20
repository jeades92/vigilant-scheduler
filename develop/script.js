$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM DD, YYYY'));

 

  $('.time-block').each(function () {
    var currentHour = dayjs().hour();
    var hour = parseInt($(this).attr('id').replace('hour-', ''));


    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

  });

 
});





