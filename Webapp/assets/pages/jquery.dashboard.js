
/**
* Theme: Adminto Admin Template
* Author: Coderthemes
* Dashboard
*/

!function($) {
    "use strict";

    var Dashboard1 = function() {
    	this.$realData = []
    };

    //creates Bar chart
    Dashboard1.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#2f3e47',
            barSizeRatio: 0.2,
            gridTextColor: '#98a6ad',
            barColors: lineColors
        });
    },

    //creates line chart
    Dashboard1.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: '#2f3e47',
          hideHover: 'auto',
          resize: true, //defaulted to true
          pointSize: 0,
          gridTextColor: '#98a6ad',
          lineColors: lineColors
        });
    },

    //creates Donut chart
    Dashboard1.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors,
            backgroundColor: '#2f3e47',
            labelColor: '#fff'
        });
    },



    Dashboard1.prototype.init = function() {

        //creating bar chart
        var $barData  = [
            { y: '2013', a: 12 },
            { y: '2014', a: 7 },
            { y: '2015', a: 10 },
            { y: '2016', a: 38 },
            { y: '2017', a: 20 },
            { y: '2018', a: 40 }
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a'], ['Statistics'], ['#188ae2']);

        //create line chart
        var $data  = [
            { y: '2011', a: 50, b: 0 },
            { y: '2012', a: 75, b: 50 },
            { y: '2013', a: 30, b: 80 },
            { y: '2014', a: 50, b: 50 },
            { y: '2015', a: 75, b: 10 },
            { y: '2016', a: 50, b: 40 },
            { y: '2017', a: 75, b: 50 },
            { y: '2018', a: 100, b: 70 }
          ];

        //creating donut chart
        var $donutData = [
                {label: "Midwife", value: 12},
                {label: "General Practicer", value: 20},
                {label: "Plastic Surgent", value: 3}
            ];
        this.createDonutChart('morris-donut-example', $donutData, ['#ff8acc', '#5b69bc', "#35b8e0"]);
    },
    //init
    $.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Dashboard1.init();
}(window.jQuery);
