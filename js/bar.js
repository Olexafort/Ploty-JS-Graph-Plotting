function basicBarGraph() {
    var config = { responsive: true }

    var datapoint1 = {
        x: ['USD', 'POUND', 'YEN', 'KSH'],
        y: [5000, 4500, 7600, 12400],
        name: 'Bitcoin',
        type: 'bar'
    };

    var datapoint2 = {
        x: ['USD', 'POUND', 'YEN', 'KSH'],
        y: [3000, 1800, 5600, 8700],
        name: 'Ethereum',
        type: 'bar'
    };

    var data = [datapoint1, datapoint2];

    var layout = { barmode: 'group' };

    Plotly.newPlot('myBasicGraph', data, layout, config);
}

function stackedBarGraph() {
    var config = { responsive: true }

    var datapoint1 = {
        x: ['Bitcoin', 'Ethereum', 'Other Coins'],
        y: [7600, 2800, 970],
        name: '2018 Prices',
        type: 'bar'
    };

    var datapoint2 = {
        x: ['Bitcoin', 'Ethereum', 'Other Coins'],
        y: [12000, 8300, 2100],
        name: '2019 Prices',
        type: 'bar'
    };

    var data = [datapoint1, datapoint2];

    var layout = { barmode: 'stack' };

    Plotly.newPlot('stackedGraph', data, layout, config);
}

function barWithHoverText() {
    var config = { responsive: true }

    var datapoint1 = {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        y: [8.0, 8.6, 12.0, 9.3, 13.0, 20.0],
        type: 'bar',
        text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
        marker: {
            color: 'rgb(142,124,195)'
        }
    };

    var data = [datapoint1];

    var layout = {
        title: 'Average Mean Performance',
        font: {
            family: 'Raleway, sans-serif'
        },
        showlegend: false,
        xaxis: {
            tickangle: -45
        },
        yaxis: {
            zeroline: false,
            gridwidth: 2
        },
        bargap: 0.05
    };

    Plotly.newPlot('barGraphWithHover', data, layout, config);
}

function basicBarGraph() {
    var config = { responsive: true }

    var data = [{
        x: ['Bitcoin', 'Ethereum', 'Other Coins'],
        y: [8753, 4371, 2543],
        type: 'bar'
    }];

    var layout = {
        title: 'Current Crypto Prices'
    }

    Plotly.newPlot('basicBar', data, config);
}