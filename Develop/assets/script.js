// Variables
var DateTime = luxon.DateTime;
var blocks = [];

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

    $("#8am .description").val(localStorage.getItem("8am"));
};

checkTime();
saveBlocks();