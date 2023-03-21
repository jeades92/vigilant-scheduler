//initializes function, creates variable today and assigns to current date of dayjs library
$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM DD, YYYY'));

//assigns css to each classs of past, present, and future  
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

//retrieves value with localStorage ID & assigns to description  
  $('.time-block').each(function () {
    var hour = $(this).attr('id');
    var description = localStorage.getItem(hour);

//binds click event to all elements with saveBtn class, saves to local storage    
    $('.saveBtn').on('click', function () {
      var hour = $(this).parent().attr('id');
      var description = $(this).siblings('.description').val();
      localStorage.setItem(hour, description);
    })

//sets value of description to current element value in localStorage
    if (description) {
      $(this).children('.description').val(description);
    }
  })
  
});

