var CoursesController = function () {
    var button;
    var init = function () {
        $(".js-toggle-attendance").click(toggleAttendance);
    };
    var toggleAttendance = function (e) {
        button = $(e.target);
        if (button.hasClass("btn-default")) {
            createAttendance();
        }
        else {
            deleteAttendance();
        }
    };
    var createAttendance = function () {
        $.post("/api/attendances", { courseId: button.attr("data-course-id") })
            .done(done)
            .fail(fail);
    };
    var deleteAttendance = function () {
        $.ajax({
            url: "/api/attendances/" + button.attr("data-course-id"),
            method: "DELETE"
        })
            .done(done)
            .fail(fail);
    }
    var done = function () {
        var text = (button.text() == "Going") ? "Going" : "Going";
        button.toggleClass("btn-info").toggleClass("btn-default").text(text);
    };
    var fail = function () {
        alert("Something failed");
    };
    return {
        init: init
    }
}();