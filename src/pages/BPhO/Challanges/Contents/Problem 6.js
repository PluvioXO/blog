export var data1 = {
    datasets: [
        {
            label: "Sun",
            data: [{x:0, y:0}],
            backgroundColor: "yellow",
            borderColor:"orange",
            borderWidth:0,
            pointRadius: 10,
            pointHoverRadius: 10,
            options: {
                animation: false
            }
        },
        {
            data: [{x:0, y:0}],
            backgroundColor: "green",
            borderColor:"green",
            borderWidth:0,
            pointRadius: 10,
            pointHoverRadius: 10,
            options: {
                animation: false
            }
        },
        {
            data: [{x:0, y:0}],
            backgroundColor: "blue",
            borderColor:"blue",
            borderWidth:0,
            pointRadius: 10,
            pointHoverRadius: 10,
            options: {
                animation: false
            }
        },
        {
            type: 'line',
            label:'Spirograph',
            data: [],
            pointRadius:0,
            pointHoverRadius: 0,
            borderColor: 'black',
            backgroundColor:'black',
            spanGaps: false,
            options: {
                animation: false
            }
        }
    ]}