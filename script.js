function clockGraduations() {
    var children = Array.from(document.getElementById('indicator-container').children);
    var angle = 0
    var child = 0

    for (child in children) {
        if (angle == 0 || angle == 90 || angle == 180 || angle == 270) {
            angle += 30;
        }
    
        children[child].style.transform = `rotate(${angle}deg) translateY(110px)`;
    
        angle += 30;
    }
}

clockGraduations();

var digitalTime = document.getElementById('digital-time');

function setTime(hr, min, sec) {
    if (hr < 10) {
        hr = addLeadingZero(hr);
    }
    if (min < 10) {
        min = addLeadingZero(min);
    }
    if (sec < 10) {
        sec = addLeadingZero(sec);
    }

    digitalTime.innerHTML = hr + ":" + min + ":" + sec;
}

function addLeadingZero(num) {
    return String(num).padStart(2, '0');
}

function rotateHands(hr, min, sec) {
    let hour_pos = (hr * 30 + min / 2) - 180;
    let minute_pos = (min * 6) - 180;
    let second_pos = (sec * 6) - 180;

    hour.style.transform = `rotate(${hour_pos}deg)`;
    minute.style.transform = `rotate(${minute_pos}deg)`;
    sc.style.transform = `rotate(${second_pos}deg)`;
}

setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    setTime(hr, min, sec);
    rotateHands(hr, min, sec);
}, 1000);
