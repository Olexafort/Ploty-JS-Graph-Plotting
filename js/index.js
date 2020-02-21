function oneBar() {
    var trace1 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar'
    };

    var trace2 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar'
    };

    var data = [trace1, trace2];

    var layout = {
        barmode: 'group'
    };

    Plotly.newPlot('myBar', data, layout);
}

function myPieChart() {
    var data = [{
        type: "pie",
        values: [2, 3, 4, 4],
        labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
    }]

    var layout = {
        height: 400,
        width: 400,
        margin: { "t": 0, "b": 0, "l": 0, "r": 0 },
        showlegend: false
    }

    Plotly.newPlot('pieChart', data, layout);
}

function lineGraph() {
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
    };

    var trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter'
    };

    var data = [trace1, trace2];

    Plotly.newPlot('lineGraph', data);
}

function plot3D() {
    Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows) {
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }

        var z_data = []
        for (i = 0; i < 24; i++) {
            z_data.push(unpack(rows, i));
        }

        var data = [{
            z: z_data,
            type: 'surface'
        }];

        var layout = {
            title: 'Mt Bruno Elevation',
            autosize: false,
            width: 500,
            height: 500,
            margin: {
                l: 65,
                r: 50,
                b: 65,
                t: 90,
            }
        };
        Plotly.newPlot('myGraph', data, layout);
    });
}