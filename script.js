$(document).ready(function () {
    function showTime() {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let session = 'AM';

        if (hour == 0) {
            hour == 12;
        }
        if (hour >= 12) {
            session = 'PM';
        }
        if (hour > 12) {
            hour = hour - 12;
        }

        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        $("#hour").text(hour);
        $("#minute").text(minute);
        $("#sec").text(second);
        $("#period").text(session);

        setTimeout(showTime, 1000);
    }
    showTime();
})