let label1 = ['Work', 'Family', 'Self-study', 'Entertainment', 'Relax'];
let data1 = [35, 15, 20, 15, 15];
let colors1 = ['#ffcce6', '#1ac6ff', '#b3b3ff', '#85e085', '#ffd480'];

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




