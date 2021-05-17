const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_value = document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');
const feels_like = document.getElementById('feels_like');

const dataHide = document.querySelector('.middle_layer');
const dataHide2 = document.querySelector('.feels_like');

const day = document.getElementById('day');
const today_data = document.getElementById('today_data');
const time = document.getElementById('time');

const getInfo = async (event) => {
    event.preventDefault();
    let city_val = cityName.value;
    if(city_val===""){
        city_name.innerText = 'Please select a city';
        dataHide.classList.add('data_hide');
        dataHide2.classList.add('data_hide');
    } else {

        try {
            let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_val}&appid=a3860d178810c61a2e9e205a5bc3f49f&units=metric`;
            
            const res = await fetch(URL);
            const data = await res.json();

            const arrData = [data];
            
            city_name.innerHTML = `${arrData[0].name} | ${arrData[0].sys.country} | ${arrData[0].weather[0].main}`;

            temp_real_value.innerHTML = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;
            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }

            feels_like.innerHTML = `Feels Like : ${arrData[0].main.feels_like}  °C`;
            
            dataHide.classList.remove('data_hide');
            dataHide2.classList.remove('data_hide');
            
        } catch (err) {
            console.log(err.message);
            city_name.innerText = 'Please Enter a Correct City';
            dataHide.classList.add('data_hide');
            dataHide2.classList.add('data_hide');
        }
        
    }
    
    
}

submitBtn.addEventListener('click',getInfo);

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let curDay = new Date();
    let Day = weekday[curDay.getDay()];

    return Day;
};

const getCurrentData = () => {
    var months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUNE",
        "JULY",
        "AUG",
        "SEPT",
        "OCT",
        "NOV",
        "DEC",
    ];
    const curDay = new Date();

    const day = curDay.getDate();
    const month = months[curDay.getMonth()];

    return `${day} ${month}`;

}

const getCurrentTime = ()=> {
    const time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let period = "AM";

    if(hour>11) hour-=12;
    if(hour==0) hour+=12;
    if(hour<12) period="PM";
    if(minute<10) minute="0"+minute;

    return `${hour}:${minute} ${period}`
}

day.innerHTML = getCurrentDay();
today_data.innerHTML = getCurrentData();
time.innerHTML = getCurrentTime();