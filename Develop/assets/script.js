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

// Function to save time blocks
var saveBlocks = function(){
    $(".saveBtn").on("click", function() {
        var data = $(this).siblings(".description").val();
        var time = $(this).attr("id");

        // Save text in local storage
        localStorage.setItem(time, data);
    });
};

// retrieve local storage data and display to textareas
$("#8.description").val(localStorage.getItem("8am"));
$("#9.description").val(localStorage.getItem("9am"));
$("#10.description").val(localStorage.getItem("10am"));
$("#11.description").val(localStorage.getItem("11am"));
$("#12.description").val(localStorage.getItem("12pm"));
$("#13.description").val(localStorage.getItem("1pm"));
$("#14.description").val(localStorage.getItem("2pm"));
$("#15.description").val(localStorage.getItem("3pm"));
$("#16.description").val(localStorage.getItem("4pm"));
$("#17.description").val(localStorage.getItem("5pm"));

checkTime();
saveBlocks();