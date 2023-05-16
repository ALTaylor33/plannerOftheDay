$(document).ready(function() {
var timeDisplayEl = $('#currentDay');

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
});

  $(".time-block").each(function () {
    var timeB = $(this).attr("id").split("-")[1];

    if (timeDisplayEl.text() === timeB) {
      $(this).addClass("present");
      $(this).find(".description").addClass("white-text");
    } else if (timeDisplayEl.text() < timeB) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (timeDisplayEl.text() > timeB) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });


  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
        
displayTime();
setInterval(displayTime, 1000);

$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
});
