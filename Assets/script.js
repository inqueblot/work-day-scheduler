$(document).ready(function () {

    var now = moment();
    var hour = now._d.getHours();

    $("#currentDay").text(now.format("dddd, MMMM Do"))
    // for each time block, set text from local storage and colors based on time
    $("textarea").each(function () {
        var savedData = localStorage.getItem($(this).attr("value"));
        $(this).text(savedData);

        var timeTag = parseInt($(this).attr('value'));

        if (timeTag < hour) {
            $(this).addClass("past")
        }
        if (timeTag > hour) {
            $(this).addClass("future")
        }
        if (timeTag == hour) {
            $(this).addClass("present")
        };

    });

    $(".saveBtn").on("click", function () {
        localStorage.setItem($(this).prev().attr("value"), $(this).prev().val())
    });

});