let label1 = ['Work', 'Family', 'Self-study', 'Entertainment', 'Relax'];
let data1 = [35, 15, 20, 15, 15];
let colors1 = ['#b30000', '#002db3', '#009933', '#e6e600', '#ff9900'];

let myChart1 = document.getElementById("myChart").getContext('2d');
let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: label1,
        datasets: [ {
            data: data1,
            backgroundColor: colors1,
            borderWidth: 1, 
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    }, 
    options: {
        title: {
            text: "Daily time",
            display: true
        }
    }
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 17, 2022 00:00:00").getTime();
var x = setInterval(function() {
    var counter = document.getElementById("demo");
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  counter.innerHTML = days + " d /" + hours + " h /"
  + minutes + " m /" + seconds + " s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "I Graduated!";
  }
}, 1000);




