const time = document.getElementById('time');

const getCurrentTime = () => {
    const time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let period = "AM";

    if (hour > 11) hour -= 12;
    if (hour == 0) hour += 12;
    if (hour < 12) period = "PM";
    if (minute < 10) minute = "0" + minute;

    return `${hour}:${minute} ${period}`
}

time.innerHTML = getCurrentTime();