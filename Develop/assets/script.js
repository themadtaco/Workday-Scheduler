// Variables
var DateTime = luxon.DateTime;

// Setting current date to readable format
var now = DateTime.now().toLocaleString();

// Setting current date to header
$("p#currentDay").html(now);

// Function to check time blocks and change classes accordingly
var checkTime = function() {
    // Get current hour
    var currentHour = DateTime.now().hour;

    // Loop over time blocks
    $(".description").each(function() {
        var timeBlockHour = parseInt($(this).attr("id"));


        // Compare hour and add appropriate classes
        if (timeBlockHour < currentHour){
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (timeBlockHour === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
};

checkTime();