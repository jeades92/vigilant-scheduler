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

  $('.time-block').each(function () {
    var hour = $(this).attr('id');
    var description = localStorage.getItem(hour);

    $('.saveBtn').on('click', function () {
      var hour = $(this).parent().attr('id');
      var description = $(this).siblings('.description').val();
      localStorage.setItem(hour, description);
    })


    if (description) {
      $(this).children('.description').val(description);
    }
  })
  
});

