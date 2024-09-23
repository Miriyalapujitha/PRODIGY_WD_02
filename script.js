let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let intervalId = null;

function stopWatch() {
    second++;
    if (second === 60) {
        minute++;
        second = 0;
    }
    if (minute === 60) {
        hour++;
        minute = 0;
    }
    let hourString = hour.toString();
    let minuteString = minute.toString();
    let secondString = second.toString();
    let countString = count.toString();

    if (hour < 10) {
        hourString = "0" + hourString;
    }
    if (minute < 10) {
        minuteString = "0" + minuteString;
    }
    if (second < 10) {
        secondString = "0" + secondString;
    }
    if (count < 10) {
        countString = "0" + countString;
    }

    document.getElementById('hour').innerHTML = hourString;
    document.getElementById('minute').innerHTML = minuteString;
    document.getElementById('second').innerHTML = secondString;
    document.getElementById('count').innerHTML = countString;
    setTimeout(stopWatch, 10);
}

document.getElementById('start').addEventListener('click', function() {
    intervalId = setInterval(stopWatch, 10);
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(intervalId);
});

document.getElementById('reset').addEventListener('click', function() {
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('minute').innerHTML = '00';
    document.getElementById('second').innerHTML = '00';
    document.getElementById('count').innerHTML = '00';
    clearInterval(intervalId);
});
