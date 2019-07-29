let v_cbm = document.getElementById('v_cbm').getContext('2d');
let chart = new Chart(v_cbm, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: ["CTV", "HA"],
        datasets: [
            {
                backgroundColor: ['rgb(255,241,0)', 'rgb(0, 176, 240)'],
                data: [1500, 1000],
            }
        ],
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                        color: "#fff" // this here
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#fff",
                    }
                }],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                        color: "#fff"
                    },
                    ticks: {
                        fontColor: "#fff",
                    }
                }]
        }
    }
});

let v_truck = document.getElementById('v_truck').getContext('2d');
let chart2 = new Chart(v_truck, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["Moscow", "Region", "SDS", "C.P"],
        datasets: [
            {
                backgroundColor: ['rgb(0,176,240)', 'rgb(255,241,0)', 'rgb(0,176,240)', 'rgb(255,241,0)'],
                data: [50, 20, 70, 20],
            },
        ]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                    color: "#fff" // this here
                },
                ticks: {
                    fontColor: "#fff",
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "#fff" // this here
                },
                ticks: {
                    fontColor: "#fff",
                    beginAtZero: true
                }
            }]
        }
    }
});

let vbct_cbm = document.getElementById('vbct_cbm').getContext('2d');
let chart3 = new Chart(vbct_cbm, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["Moscow", "Aksay", "Nizhniy Novgorod", "Novosibirsk", "Kazan", "Izhevsk", "Other"],
        datasets: [
            {
                backgroundColor: 'rgb(255,241,0)',
                data: [1000, 500, 400, 300, 200, 50, 50],
            },
        ]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                    color: "#fff" // this here
                },
                ticks: {
                    fontColor: "#fff",
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "#fff" // this here
                },
                ticks: {
                    fontColor: "#fff",
                    beginAtZero: true
                }
            }]
        }
    }
});

let vbp_cbm = document.getElementById('vbp_cbm').getContext('2d');
let chart4 = new Chart(vbp_cbm, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["CTV", "WM", "REF", "VC", "MWO", "MNT", "Other"],
        datasets: [
            {
                backgroundColor: 'rgb(255,241,0)',
                data: [1100, 970, 200, 100, 90, 30, 10],
            },
        ]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                    color: "#fff" // this here
                },
                ticks: {
                    fontColor: "#fff",
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "#fff" // this here
                },
                ticks: {
                    fontColor: "#fff",
                    beginAtZero: true
                }
            }]
        }
    }
});

let vbc_cbm = document.getElementById('vbc_cbm').getContext('2d');
let chart5 = new Chart(vbc_cbm, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["MBM", "DNS Retail", "Haskel", "Nosimo", "TD Absolute", "CRS", "Other"],
        datasets: [
            {
                backgroundColor: 'rgb(255,255,255)',
                data: [1300, 730, 200, 100, 80, 60, 30],
            },
        ]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                    color: "#fff" // this here
                },
                ticks: {
                    fontColor: "#fff",
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "#fff" // this here
                },
                ticks: {
                    fontColor: "#fff",
                    beginAtZero: true
                }
            }]
        }
    }
});

let vbp_truck = document.getElementById('vbp_truck').getContext('2d');
let chart6 = new Chart(vbp_truck, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: ["L.D", "Export"],
        datasets: [
            {
                backgroundColor: ['rgb(255,255,255)', 'rgb(146,148,154)'],
                data: [20, 15],
            }
        ],
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                        color: "#fff" // this here
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#fff",
                    }
                }],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                        color: "#fff"
                    },
                    ticks: {
                        fontColor: "#fff",
                    }
                }]
        }
    }
});