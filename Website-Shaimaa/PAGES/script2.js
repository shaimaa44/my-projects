
let label2 = ['العمل', 'العائلة', 'الدراسة الذاتية', 'الترفيه', 'الإسترخاء'];
let data2 = [35, 15, 20, 15, 15];
let colors2 = ['#b30000', '#002db3', '#009933', '#e6e600', '#ff9900'];

let myChart2 = document.getElementById("myChartAR").getContext('2d');
let chart2 = new Chart(myChart2, {
    type: 'doughnut',
    data: {
        labels: label2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2,
            borderWidth: 1, 
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    }, 
    options: {
        title: {
            text: "الوقت اليومي",
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
    document.getElementById("demo").innerHTML = "! لقد تخرجت ";
  }
}, 1000);