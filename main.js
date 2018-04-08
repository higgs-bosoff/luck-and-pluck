function makeGaussianPlot(sel, p_n, dsigma) {
    p_n = p_n | 101;
    dsigma = dsigma | 4;

    var data = {};
    data.labels = [];
    data.series = [[]];
    for (var i = 0; i < p_n; ++i) {
        data.labels.push(-dsigma + i*2*dsigma/(p_n-1.0));
        data.series[0].push(Math.exp(-Math.pow(data.labels[i], 2)));
    }

    var options = {
    showPoint: false,
    lineSmooth: true,
    axisX: {
        // We can disable the grid for this axis
        showGrid: false,
        // and also don't show the label
        showLabel: false
    },
    axisY: {
        showLabel: false
    }
    };
    
    new Chartist.Line(sel, data, options);
}

function makeParetoPlot(sel, p_n, alpha, xmax) {
    p_n = p_n | 101;
    alpha = alpha == null? 1.27 : alpha;
    xmax = xmax | 5;

    var data = {};
    data.labels = [];
    data.series = [[]];
    for (var i = 0; i < p_n; ++i) {
        data.labels.push(1+i*(xmax-1.0)/(p_n-1.0));
        data.series[0].push(alpha/Math.pow(data.labels[i], alpha+1.0));
    }

    var options = {
    showPoint: false,
    lineSmooth: true,
    axisX: {
        // We can disable the grid for this axis
        showGrid: false,
        // and also don't show the label
        showLabel: false
    },
    axisY: {
        showLabel: false
    }
    };
    
    new Chartist.Line(sel, data, options);
}