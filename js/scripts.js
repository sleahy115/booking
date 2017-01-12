$(document).ready(function(){
  $("#appointment form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var serviceInput = $("input#service").val();
    var timeInput = $("input#time").val();

  $(".name").text(nameInput);
  $(".date").text(dateInput);
  $(".time").text(timeInput);
  $(".service").text(serviceInput);

  event.preventDefault();
  });
});
