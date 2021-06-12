
let label2 = ['العمل', 'العائلة', 'الدراسة الذاتية', 'الترفيه', 'الإسترخاء'];
let data2 = [35, 15, 20, 15, 15];
let colors2 = ['#ffcce6', '#1ac6ff', '#b3b3ff', '#85e085', '#ffd480'];

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