function basicLineGraph() {
    var datapoint1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
    };

    var datapoint2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter'
    };

    var data = [datapoint1, datapoint2];

    Plotly.newPlot('homeGraph', data);
}

function lineScatterGraph() {
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        marker: {
            color: 'rgb(219, 64, 82)',
            size: 12
        }
    };

    var trace2 = {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9],
        mode: 'lines',
        line: {
            color: 'rgb(55, 128, 191)',
            width: 3
        }
    };

    var trace3 = {
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines+markers',
        marker: {
            color: 'rgb(128, 0, 128)',
            size: 8
        },
        line: {
            color: 'rgb(128, 0, 128)',
            width: 1
        }
    };

    var data = [trace1, trace2, trace3];

    var layout = {
        title: 'Line and Scatter Styling'
    };

    Plotly.newPlot('lineScatter', data, layout);
}

function nameScatter() {
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        name: 'Scatter'
    };

    var trace2 = {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9],
        mode: 'lines',
        name: 'Lines'
    };

    var trace3 = {
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines+markers',
        name: 'Scatter + Lines'
    };

    var data = [trace1, trace2, trace3];

    var layout = {
        title: 'Adding Names to Line and Scatter Plot'
    };

    Plotly.newPlot('nameScatter', data, layout);
}

function styledScatterGraph() {
    var trace1 = {
        x: [52698, 43117],
        y: [53, 31],
        mode: 'markers',
        name: 'North America',
        text: ['United States', 'Canada'],
        marker: {
            color: 'rgb(164, 194, 244)',
            size: 12,
            line: {
                color: 'white',
                width: 0.5
            }
        },
        type: 'scatter'
    };

    var trace2 = {
        x: [39317, 37236, 35650, 30066, 29570, 27159, 23557, 21046, 18007],
        y: [33, 20, 13, 19, 27, 19, 49, 44, 38],
        mode: 'markers',
        name: 'Europe',
        text: ['Germany', 'Britain', 'France', 'Spain', 'Italy', 'Czech Rep.', 'Greece', 'Poland'],
        marker: {
            color: 'rgb(255, 217, 102)',
            size: 12
        },
        type: 'scatter'
    };

    var trace3 = {
        x: [42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899],
        y: [23, 42, 54, 89, 14, 99, 93, 70],
        mode: 'markers',
        name: 'Asia/Pacific',
        text: ['Australia', 'Japan', 'South Korea', 'Malaysia', 'China', 'Indonesia', 'Philippines', 'India'],
        marker: {
            color: 'rgb(234, 153, 153)',
            size: 12
        },
        type: 'scatter'
    };

    var trace4 = {
        x: [19097, 18601, 15595, 13546, 12026, 7434, 5419],
        y: [43, 47, 56, 80, 86, 93, 80],
        mode: 'markers',
        name: 'Latin America',
        text: ['Chile', 'Argentina', 'Mexico', 'Venezuela', 'Venezuela', 'El Salvador', 'Bolivia'],
        marker: {
            color: 'rgb(142, 124, 195)',
            size: 12
        },
        type: 'scatter'
    };

    var data = [trace1, trace2, trace3, trace4];

    var layout = {
        title: 'Quarter 1 Growth',
        xaxis: {
            title: 'GDP per Capita',
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            title: 'Percent',
            showline: false
        }
    };

    Plotly.newPlot('styleScattered', data, layout);
}