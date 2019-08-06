let v_cbm = document.getElementById('v_cbm').getContext('2d');
new Chart(v_cbm, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: ["CTV", "HA"],
        datasets: [
            {
                backgroundColor: ['rgb(255,192,0)', 'rgb(0, 176, 240)'],
                data: data_out_cbm,
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
new Chart(v_truck, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["Moscow", "Region", "SDS", "C.P"],
        datasets: [
            {
                backgroundColor: ['rgb(0,176,240)', 'rgb(255,192,0)', 'rgb(0,176,240)', 'rgb(255,192,0)'],
                data: arrsum,
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
new Chart(vbct_cbm, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["Moscow", "Aksay", "Nizhniy Novgorod", "Novosibirsk", "Kazan", "Izhevsk", "Other"],
        datasets: [
            {
                backgroundColor: 'rgb(255,192,0)',
                data: data_vbc,
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
new Chart(vbp_cbm, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["CTV", "WM", "REF", "VC", "MWO", "MNT", "Other"],
        datasets: [
            {
                backgroundColor: 'rgb(255,192,0)',
                data: data_vbp,
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
new Chart(vbc_cbm, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["MBM", "DNS Retail", "Haskel", "Nosimo", "TD Absolute", "CRS", "Other"],
        datasets: [
            {
                backgroundColor: 'rgb(255,255,255)',
                data: data_vbcs,
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
new Chart(vbp_truck, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset

    data: {
        labels: ["L.D", "Export",],
        datasets: [
            {
                backgroundColor: ['rgb(255,255,255)', 'rgb(110,110,110)'],
                data: data_ldexp,
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

let vol_cbm = document.getElementById('vol_cbm').getContext('2d');
new Chart(vol_cbm, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: ["SERK", "Import"],
        datasets: [
            {
                backgroundColor: ['rgb(255,192,0)', 'rgb(0,176,240)'],
                data: data_inb_cbm,
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

let vol_truck = document.getElementById('vol_truck').getContext('2d');
new Chart(vol_truck, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: ["SERK", "Import"],
        datasets: [
            {
                backgroundColor: ['rgb(255,192,0)', 'rgb(0,176,240)'],
                data: data_inb_tr,
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

let vbct_cbm2 = document.getElementById('vbct_cbm2').getContext('2d');
new Chart(vbct_cbm2, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["CTV", "WM", "REF", "VC", "MWO", "MNT", "Other"],
        datasets: [
            {
                backgroundColor: 'rgb(255,192,0)',
                data: data_inbp,
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

let vbpr_cbm = document.getElementById('vbpr_cbm').getContext('2d');
new Chart(vbpr_cbm, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset

    data: {
        labels: ["CTV", "WM", "REF", "VC", "MWO", "MNT", "Other"],
        datasets: [
            {
                backgroundColor: 'rgb(255,192,0)',
                data: data_inbpq,
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