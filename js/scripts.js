$(document).ready(function(){
  $("#massage").click(function() {
    $("#massage-pic").toggle();
  });
  $("#appointment form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var service = $("#service").val();
    var timeInput = $("input#time").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);
    $(".service").text(service);


    event.preventDefault();
  });
});
