setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  AMPM = 'AM';

  if (hr > 12) {
    hr -= 12;
    AMPM = "PM";
  }
  if (hr == 0) {
    hr = 12;
    AMPM = "AM";
  }

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let curentTime = hr + ":" + min + ":" + sec + AMPM;

  document.getElementById('digital-clock').innerHTML = curentTime;

}
showTime();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

var today = new Date();
var date = months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
document.getElementById("date").innerText = date;



const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

document.getElementById("day").innerText = days[today.getDay()];













// Logout
document.getElementById('logout').addEventListener('click', () => {
  auth.signOut().then(() => {
    console.log('signed out')
    window.location.href = "index.html"
  }).catch((error) => {
    console.log('error: err')
  });
})