// Variables
var DateTime = luxon.DateTime;

var now = DateTime.now().toLocaleString();

// Setting current date to header
$("p#currentDay").html(now);
