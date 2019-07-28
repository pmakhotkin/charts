let v_cbm = document.getElementById('v_cbm').getContext('2d');
let chart = new Chart(v_cbm, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        datasets: [
            {
                label: "CTV",
                backgroundColor: ['rgb(255, 192, 0)'],
                data: [1500],
            },
            {
                label: "HA",
                backgroundColor: ['rgb(0, 176, 240)'],
                data: [1000],
            },
        ]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

let v_truck = document.getElementById('myChart2').getContext('2d');
let chart2 = new Chart(v_truck, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["Volume(TRUCK)"],
        datasets: [
            {
                label: "Moscow",
                backgroundColor: ['rgb(0,176,240)'],
                data: [50],
            },
            {
                label: "Region",
                backgroundColor: ['rgb(255,192,0)'],
                data: [20],
            },
            {
                label: "SDS",
                backgroundColor: ['rgb(0, 176, 240)'],
                data: [70],
            },
            {
                label: "C.P",
                backgroundColor: ['rgb(255,192,0)'],
                data: [20],
            }
        ]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});