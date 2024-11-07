const wrapper = document.querySelector('.wrapper');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');


function timeLineAdd () {
        let deg = 0;
        for(let i=0; i<60; i++){
            let minutesLine = document.createElement('div');
            minutesLine.classList.add('minutre-line');
            minutesLine.style.rotate = deg + 'deg';
            wrapper.appendChild(minutesLine);
            deg += 6;
        };

        let circleMinutes = document.createElement('div');
        circleMinutes.classList.add('circle-minutes');
        wrapper.appendChild(circleMinutes);

        deg = 0;
        for(let i=0; i<6; i++) {
            let hourLineSmall = document.createElement('div');
            hourLineSmall.classList.add('hour-line-small');
            hourLineSmall.style.rotate = deg + 'deg';
            wrapper.appendChild(hourLineSmall);
            deg += 30;
        };

        let circleHoursSmall = document.createElement('div');
        circleHoursSmall.classList.add('circle-hours-small');
        wrapper.appendChild(circleHoursSmall);

        deg = 0;
        for(let i=0; i<2; i++){
            let hourLine = document.createElement('div');
            hourLine.classList.add('hour-line');
            hourLine.style.rotate = deg+'deg';
            wrapper.appendChild(hourLine);
            deg += 90;
        };
}
timeLineAdd();

setInterval(() => {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    let degSeconds = 6*second;
    let degMinutes = minute*6 + degSeconds/60;
    let degHours = hour*30 + 30/60*minute;
    
    secondHand.style.rotate = degSeconds+'deg';
    minuteHand.style.rotate = degMinutes+'deg';
    hourHand.style.rotate = degHours+'deg';
}, 1000)