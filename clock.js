setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hour_pos = (hr * 30 + min / 2) - 180;
    let minute_pos = (min * 6) - 180;
    let second_pos = (sec * 6) - 180;

    hour.style.transform = `rotate(${hour_pos}deg)`;

    minute.style.transform = `rotate(${minute_pos}deg)`;

    second.style.transform = `rotate(${second_pos}deg)`;
}, 1000);

var children = Array.from(document.getElementById('digits_container').children);

angle = 0
children.forEach(element => {
    if(angle == 0 || angle == 90 || angle == 180 || angle == 270){
        
    }
    else{
        element.style.transform = `rotate(${angle}deg) translateY(13vw) translateY(-1vw)`;
    }
    angle += 30;
});