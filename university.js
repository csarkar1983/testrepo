// --------------------------------------------------------------------------------// 
// D3 Code for CS 416 Final Project - By Chanchal Sarkar
// --------------------------------------------------------------------------------// 

// --------------------------------------------------------------------------------// 
// SETUP --------------------------------------------------------------------------//
// --------------------------------------------------------------------------------// 

// Retrieve the scenes
//var scene1 = d3.select('#scene1')

var scene1mergine = {top: 20, right: 30, bottom: 40, left: 200}
var scene1width = 800 - scene1mergine.left - scene1mergine.right
var scene1height = 500 - scene1mergine.top - scene1mergine.bottom

var scene1 = d3.select("#scene1")
        .append("svg")
            .attr("width", scene1width + scene1mergine.left + scene1mergine.right)
            .attr("height", scene1height + scene1mergine.top + scene1mergine.bottom)
        .append("g")
            .attr("transform",
                "translate(" + scene1mergine.left + "," + scene1mergine.top + ")");


var scene8 = d3.select('#scene8');
        

var svgWidth = 500;
var svgHight = 300;
var radius = Math.min(svgWidth, svgHight)/2;

var scene2 = d3.select('#scene2')
//var scene3 = d3.select('#scene3')

// constants
var width = 1000
var height = 1000



var margin = { top: 10, right: 100, bottom: 50, left: 50 };
    //width = 1000 - margin.left - margin.right,
    //height = 1000 - margin.top - margin.bottom;
    //width = 1000,
    //height = 500;

// axis definition
var x = d3.scaleBand()
    .domain([20, 35, 50, 65, 80])
    .range([0, width]);



var y = d3.scaleLinear()
    .domain([0, 220])
    .range([height, 0]);

var xAxis = d3.axisBottom()
    .scale(x)
    .ticks(5);

var yAxis = d3.axisLeft()
    .scale(y)
    .ticks(10);

// axis appends

/*scene8.append('text')
    .attr('x', 500)
    .attr('y', 100)
    .attr('text-anchor', 'middle')
    .text('State')*/

scene8.append('text')
    .attr('x', -300)
    .attr('y', 25)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Total Score')

scene2.append("g")
    .attr("transform", "translate(50,300)")
    .attr("class", "axis")
    .call(xAxis);

scene2.append('text')
    .attr('x', 500)
    .attr('y', 340)
    .attr('text-anchor', 'middle')
    .text('Female Percentage')

/*scene3.append('text')
    .attr('x', -500)
    .attr('y', 15)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Number of Cylinders')

scene3.append('text')
    .attr('x', 500)
    .attr('y', 1150)
    .attr('text-anchor', 'middle')
    .text('Fuel Type')*/


var arc = d3.arc()
    .outerRadius(radius)
    .innerRadius(60);

//var color = d3.scaleOrdinal(d3.schemeCategory10);
var color = d3.scaleOrdinal(['#984ea3', '#8DC348', '#36570C', '#B55517', '#FF5733', '#FFAC33', '#0DE30D', '#FCFF33', 
                              '#C1C348',  '#4daf4a','#377eb8','#ff7f00','#E3610D','#e41a1c', '#0C6D0C', '#0C6D3E', '#589578',
                              '#588295',  '#7496EA','#DDD5E3','#E320D7','#B496A0','#B496B2', '#B420E3', '#B674EA', '#74C6EA',
                              '#EB1949',  '#782B3D','#D543CA','#AF9AEE','#9AB6EE','#3763BB', '#A7DFE9', '#A7E9D9', '#B6E9A7']);

var pie = d3.pie().value(function(d){
    return d.Total_Fatalities_2019;
  });

var arc2 = d3.arc()
  .outerRadius(radius)
  .innerRadius(60);

//var color2 = d3.scaleOrdinal(d3.schemeCategory10);

var pie2 = d3.pie().value(function(d){
  return d.Total_Fatalities_2020;
});

var arc3 = d3.arc()
  .outerRadius(radius)
  .innerRadius(60);

var pie3 = d3.pie().value(function(d){
  return d.Total_Fatalities_2021;
});

// --------------------------------------------------------------------------------// 
// SCENE ONE ----------------------------------------------------------------------//
// --------------------------------------------------------------------------------// 

var bar_tooltip = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "65px")
    .style("color", "white")

var pai_tooltip = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var pai_tooltip2 = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var pai_tooltip3 = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var bubble_tooltip5 = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var bubble_tooltip6 = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var bubble_tooltip7 = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")



var width1 = 450
var height1 = 450
var margin1 = 40
var radius1 = Math.min(width1, height1) / 2 - margin1


async function load1() {

    d3.csv("https://csarkar1983.github.io/testrepo/data/UniversityCountData_2016.csv").then(function (data) {
        

        var x = d3.scaleLinear()
            .domain([0, 70])
            .range([ 0, scene1width]);
        scene1.append("g")
            .attr("transform", "translate(0," + scene1height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");


        var y = d3.scaleBand()
            .range([ 0, scene1height ])
            .domain(data.map(function(d) { return d.Country_2016; }))
            .padding(.1);
        scene1.append("g")
            .call(d3.axisLeft(y));

        scene1.selectAll("myRect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d.Country_2016); })
            .attr("width", function(d) { return x(d.University_Count_2016); })
            .attr("height", y.bandwidth() )
            .attr("fill", "#69b3a2")
            .attr("fill", "#FFA500").on("mouseover", function (d, i) {
                bar_tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                bar_tooltip.html(d.Country_2016+"("+d.University_Count_2016+")")
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                bar_tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            })

        const annotations = [
            {
                note: {
                label: "USA, UK, Germany, Neatherland & Australia",
                title: "Top 5 Countries with top 200 ranking universities"
                },
                connector: {
                end: "dot",        // Can be none, or arrow or dot
                type: "line",      // ?? don't know what it does
                lineType : "vertical",    // ?? don't know what it does
                endScale: 10     // dot size
                },
                color: ["blue"],
                x: 340,
                y: 160,
                dy: 70,
                dx: 70
            }
            ]

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        scene1
            .append("g")
            .call(makeAnnotations)
        
        
    })
}

async function load8() {
    d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016_USA.csv").then(function (data_given) {
        

        //console.log(data_given[3])

        var makeScale = d3.scaleBand()
            .range([0, 1000])
            .domain(data_given.map(function (d) { return d.university_name; }))

        var makeAxis = d3.axisBottom()
            .scale(makeScale)
            .ticks(5);

        scene8.append("g")
            .attr("transform", "translate(50,550)")
            .attr("class", "axis")
            .call(makeAxis)
            .selectAll("text")
            .attr("transform", "translate(-15,0)rotate(-90)")
            .style("text-anchor", "end");

        scene8.selectAll("mybar")
            .data(data_given)
            .enter()
            .append("rect")
            .attr("x", function (d, i) { return margin.left + makeScale(d.university_name); })
            .attr("y", function (d, i) { return y(d.total_score) - 450 })
            .attr("width", makeScale.bandwidth() - 5)
            .attr("height", function (d, i) { return height - y(d.total_score); })
            .attr("fill", "#8DC348").on("mouseover", function (d, i) {
                bar_tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                bar_tooltip.html(d.university_name+"("+d.total_score+")")
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY) + "px");
            })
            .on("mouseout", function (d) {
                bar_tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        const annotations = [
            {
                note: {
                //label: "There is a +Ve correlation",
                title: "California Institute of Technology(88.4), Stanford University(88.2), Massachusetts Institute of Technology(88)",
                wrap: 300,
                padding: 10
                },
                connector: {
                end: "dot",        // Can be none, or arrow or dot
                type: "line",      // ?? don't know what it does
                lineType : "vertical",    // ?? don't know what it does
                endScale: 10     // dot size
                },
                color: ["blue"],
                x: 710,
                y: 10,
                dy: 20,
                dx: 20
            }
        ]
        

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        scene8.append("g")
            .call(makeAnnotations)

        const annotations1 = [
            {
                note: { label: "Top 3" , wrap: 300,
                padding: -20},
                color: ["blue"],
                x: 50,
                y: 140,
                dy: 0,
                dx: 0,
                subject: { radius: 50, radiusPadding: 10 },
            },
        ];
            
        const makeAnnotations1 = d3.annotation().annotations(annotations1);
        scene8.append("g")
            .call(makeAnnotations1)

    })
}

function handleSelectChange(event) {

    var selectElement = event.target;
    var value = selectElement.value;
    //alert(value);

    scene8.selectAll('mybar').remove();
    scene8.selectAll('rect').remove();
    scene8.selectAll('g').remove();

    
        

        
    if(value=="USA"){

        d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016_USA.csv").then(function (data_given) {

            var makeScale = d3.scaleBand()
                .range([0, 1000])
                .domain(data_given.map(function (d) { return d.university_name; }))

            var makeAxis = d3.axisBottom()
                .scale(makeScale)
                .ticks(5);


            scene8.append("g")
                .attr("transform", "translate(50,550)")
                .attr("class", "axis")
                .call(makeAxis)
                .selectAll("text")
                .attr("transform", "translate(-15,0)rotate(-90)")
                .style("text-anchor", "end");

            scene8.selectAll("mybar")
                .data(data_given)
                .enter()
                .append("rect")
                .attr("x", function (d, i) { return margin.left + makeScale(d.university_name); })
                .attr("y", function (d, i) { return y(d.total_score) - 450 })
                .attr("width", makeScale.bandwidth() - 5)
                .attr("height", function (d, i) { return height - y(d.total_score); })
                .attr("fill", "#8DC348").on("mouseover", function (d, i) {
                    bar_tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    bar_tooltip.html(d.university_name+"("+d.total_score+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY) + "px");
                })
                .on("mouseout", function (d) {
                    bar_tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });

            const annotations = [
                {
                    note: {
                    //label: "There is a +Ve correlation",
                    title: "California Institute of Technology(88.4), Stanford University(88.2), Massachusetts Institute of Technology(88)",
                    wrap: 300,
                    padding: 10
                    },
                    connector: {
                    end: "dot",        // Can be none, or arrow or dot
                    type: "line",      // ?? don't know what it does
                    lineType : "vertical",    // ?? don't know what it does
                    endScale: 10     // dot size
                    },
                    color: ["blue"],
                    x: 710,
                    y: 10,
                    dy: 20,
                    dx: 20
                }
            ]
            
    
            const makeAnnotations = d3.annotation()
                .annotations(annotations)
            scene8.append("g")
                .call(makeAnnotations)

            const annotations1 = [
                {
                    note: { label: "Top 3" , wrap: 300,
                    padding: -20},
                    color: ["blue"],
                    x: 50,
                    y: 140,
                    dy: 0,
                    dx: 0,
                    subject: { radius: 50, radiusPadding: 10 },
                },
            ];
                
            const makeAnnotations1 = d3.annotation().annotations(annotations1);
            scene8.append("g")
                .call(makeAnnotations1)

        })
    } else if(value=="UK"){

        d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016_UK.csv").then(function (data_given) {

            var makeScale = d3.scaleBand()
                .range([0, 1000])
                .domain(data_given.map(function (d) { return d.university_name; }))

            var makeAxis = d3.axisBottom()
                .scale(makeScale)
                .ticks(5);


            scene8.append("g")
                .attr("transform", "translate(50,550)")
                .attr("class", "axis")
                .call(makeAxis)
                .selectAll("text")
                .attr("transform", "translate(-15,0)rotate(-90)")
                .style("text-anchor", "end");

            scene8.selectAll("mybar")
                .data(data_given)
                .enter()
                .append("rect")
                .attr("x", function (d, i) { return margin.left + makeScale(d.university_name); })
                .attr("y", function (d, i) { return y(d.total_score) - 450 })
                .attr("width", makeScale.bandwidth() - 5)
                .attr("height", function (d, i) { return height - y(d.total_score); })
                .attr("fill", "#D86F21").on("mouseover", function (d, i) {
                    bar_tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    bar_tooltip.html(d.university_name+"("+d.total_score+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY) + "px");
                })
                .on("mouseout", function (d) {
                    bar_tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });

            const annotations = [
                {
                    note: {
                    //label: "There is a +Ve correlation",
                    title: "University of Oxford(88.3), University of Cambridge(88.1), Imperial College London(87.7)",
                    wrap: 300,
                    padding: 10
                    },
                    connector: {
                    end: "dot",        // Can be none, or arrow or dot
                    type: "line",      // ?? don't know what it does
                    lineType : "vertical",    // ?? don't know what it does
                    endScale: 10     // dot size
                    },
                    color: ["blue"],
                    x: 710,
                    y: 10,
                    dy: 20,
                    dx: 20
                }
            ]
            
    
            const makeAnnotations = d3.annotation()
                .annotations(annotations)
            scene8.append("g")
                .call(makeAnnotations)

            })

        const annotations1 = [
            {
                note: { label: "Top Three *" , wrap: 300,
                padding: -20},
                color: ["blue"],
                x: 50,
                y: 140,
                dy: 0,
                dx: 0,
                subject: { radius: 50, radiusPadding: 10 },
            },
        ];
            
        const makeAnnotations1 = d3.annotation().annotations(annotations1);
        scene8.append("g")
            .call(makeAnnotations1)

    } else if(value=="Germany"){
        d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016_Germany.csv").then(function (data_given) {

            var makeScale = d3.scaleBand()
                .range([0, 1000])
                .domain(data_given.map(function (d) { return d.university_name; }))

            var makeAxis = d3.axisBottom()
                .scale(makeScale)
                .ticks(5);


            scene8.append("g")
                .attr("transform", "translate(50,550)")
                .attr("class", "axis")
                .call(makeAxis)
                .selectAll("text")
                .attr("transform", "translate(-15,0)rotate(-90)")
                .style("text-anchor", "end");

            scene8.selectAll("mybar")
                .data(data_given)
                .enter()
                .append("rect")
                .attr("x", function (d, i) { return margin.left + makeScale(d.university_name); })
                .attr("y", function (d, i) { return y(d.total_score) - 450 })
                .attr("width", makeScale.bandwidth() - 5)
                .attr("height", function (d, i) { return height - y(d.total_score); })
                .attr("fill", "#19A97B").on("mouseover", function (d, i) {
                    bar_tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    bar_tooltip.html(d.university_name+"("+d.total_score+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY) + "px");
                })
                .on("mouseout", function (d) {
                    bar_tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });

            const annotations = [
                {
                    note: {
                    //label: "There is a +Ve correlation",
                    title: "LMU Munich(85.6), Heidelberg University(84.8), Humboldt University of Berlin(83.6)",
                    wrap: 300,
                    padding: 10
                    },
                    connector: {
                    end: "dot",        // Can be none, or arrow or dot
                    type: "line",      // ?? don't know what it does
                    lineType : "vertical",    // ?? don't know what it does
                    endScale: 10     // dot size
                    },
                    color: ["blue"],
                    x: 710,
                    y: 10,
                    dy: 20,
                    dx: 20
                }
            ]
            
    
            const makeAnnotations = d3.annotation()
                .annotations(annotations)
            scene8.append("g")
                .call(makeAnnotations)

            const annotations1 = [
                {
                    note: { label: "Top Three (Germany)" , wrap: 300,
                    padding: -20},
                    color: ["blue"],
                    x: 50,
                    y: 140,
                    dy: 0,
                    dx: 0,
                    subject: { radius: 50, radiusPadding: 10 },
                },
            ];
                
            const makeAnnotations1 = d3.annotation().annotations(annotations1);
            scene8.append("g")
                .call(makeAnnotations1)

            })
    } else if(value=="Neatherland"){
        d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016_Neatherland.csv").then(function (data_given) {

            var makeScale = d3.scaleBand()
                .range([0, 1000])
                .domain(data_given.map(function (d) { return d.university_name; }))

            var makeAxis = d3.axisBottom()
                .scale(makeScale)
                .ticks(5);


            scene8.append("g")
                .attr("transform", "translate(50,550)")
                .attr("class", "axis")
                .call(makeAxis)
                .selectAll("text")
                .attr("transform", "translate(-15,0)rotate(-90)")
                .style("text-anchor", "end");

            scene8.selectAll("mybar")
                .data(data_given)
                .enter()
                .append("rect")
                .attr("x", function (d, i) { return margin.left + makeScale(d.university_name); })
                .attr("y", function (d, i) { return y(d.total_score) - 450 })
                .attr("width", makeScale.bandwidth() - 5)
                .attr("height", function (d, i) { return height - y(d.total_score); })
                .attr("fill", "#216FD8").on("mouseover", function (d, i) {
                    bar_tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    bar_tooltip.html(d.university_name+"("+d.total_score+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY) + "px");
                })
                .on("mouseout", function (d) {
                    bar_tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });

            const annotations = [
                {
                    note: {
                    //label: "There is a +Ve correlation",
                    title: "Wageningen University and Research Center(83.7), University of Amsterdam(82.7), Utrecht University(82.3)",
                    wrap: 300,
                    padding: 10
                    },
                    connector: {
                    end: "dot",        // Can be none, or arrow or dot
                    type: "line",      // ?? don't know what it does
                    lineType : "vertical",    // ?? don't know what it does
                    endScale: 10     // dot size
                    },
                    color: ["blue"],
                    x: 710,
                    y: 10,
                    dy: 20,
                    dx: 20
                }
            ]
            
    
            const makeAnnotations = d3.annotation()
                .annotations(annotations)
            scene8.append("g")
                .call(makeAnnotations)

            const annotations1 = [
                {
                    note: { label: "Top 3 Universities (Neatherland)" , wrap: 300,
                    padding: -20},
                    color: ["blue"],
                    x: 50,
                    y: 140,
                    dy: 0,
                    dx: 0,
                    subject: { radius: 50, radiusPadding: 10 },
                },
            ];
                
            const makeAnnotations1 = d3.annotation().annotations(annotations1);
            scene8.append("g")
                .call(makeAnnotations1)

            })
    } else if(value=="Australia"){
        d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016_Australia.csv").then(function (data_given) {

            var makeScale = d3.scaleBand()
                .range([0, 1000])
                .domain(data_given.map(function (d) { return d.university_name; }))

            var makeAxis = d3.axisBottom()
                .scale(makeScale)
                .ticks(5);


            scene8.append("g")
                .attr("transform", "translate(50,550)")
                .attr("class", "axis")
                .call(makeAxis)
                .selectAll("text")
                .attr("transform", "translate(-15,0)rotate(-90)")
                .style("text-anchor", "end");

            scene8.selectAll("mybar")
                .data(data_given)
                .enter()
                .append("rect")
                .attr("x", function (d, i) { return margin.left + makeScale(d.university_name); })
                .attr("y", function (d, i) { return y(d.total_score) - 450 })
                .attr("width", makeScale.bandwidth() - 5)
                .attr("height", function (d, i) { return height - y(d.total_score); })
                .attr("fill", "#8A21D8").on("mouseover", function (d, i) {
                    bar_tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    bar_tooltip.html(d.university_name+"("+d.total_score+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY) + "px");
                })
                .on("mouseout", function (d) {
                    bar_tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });

            const annotations = [
                {
                    note: {
                    //label: "There is a +Ve correlation",
                    title: "University of Melbourne(85.2), Australian National University(83.3), University of Sydney(82.8)",
                    wrap: 300,
                    padding: 10
                    },
                    connector: {
                    end: "dot",        // Can be none, or arrow or dot
                    type: "line",      // ?? don't know what it does
                    lineType : "vertical",    // ?? don't know what it does
                    endScale: 10     // dot size
                    },
                    color: ["blue"],
                    x: 710,
                    y: 10,
                    dy: 20,
                    dx: 20
                }
            ]
            
    
            const makeAnnotations = d3.annotation()
                .annotations(annotations)
            scene8.append("g")
                .call(makeAnnotations)

            })

        const annotations1 = [
            {
                note: { label: "********* Top Three Universities (Australia) *********" , wrap: 600,
                padding: -20},
                color: ["blue"],
                x: 50,
                y: 140,
                dy: 0,
                dx: 0,
                subject: { radius: 50, radiusPadding: 10 },
            },
        ];
            
        const makeAnnotations1 = d3.annotation().annotations(annotations1);
        scene8.append("g")
            .call(makeAnnotations1)
    }
    
}


async function load9() {


    var margin = {top: 10, right: 30, bottom: 50, left: 60};
    var width = 460 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var svgscene9 = d3.select("#scene9")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    var tooltip = d3.select("body").append("div")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "black")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("color", "white")

    d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016.csv").then(function (data) {

        //console.log(data)

        // Add X axis
        var xScale9 = d3.scaleLinear()
            /*.domain([d3.min(data, function(d){ return d.teaching_score; }) - 10, 
                    d3.max(data, function(d){ return d.teaching_score; }) + 10])*/
            .domain([10, 100])
            .range([ 0, width ]);

        svgscene9.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale9));
        
        // Add Y axis
        var yScale9 = d3.scaleLinear()
            .domain([d3.min(data, function(d){ return d.total_score; }), 
                    d3.max(data, function(d){ return d.total_score; })])
            .range([ height, 0]);

        svgscene9.append("g")
            .call(d3.axisLeft(yScale9));

        svgscene9.append('text')
            .attr('x', 200)
            .attr('y', 380)
            .attr('text-anchor', 'middle')
            .text('Total Score')
        
        svgscene9.append('text')
            .attr('x', -150)
            .attr('y', -40)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('Teaching Score')

        
        // Color scale: give me a specie name, I return a color
        var color = d3.scaleOrdinal()
            .domain(["Australia", "Austria", "Belgium", "Brazil", "Canada", "China", "Denmark", "Finland", 
                    "France", "Germany", "HongKong", "Israel", "Italy", "Japan", "Netherlands", "NewZealand", 
                    "Norway", "Ireland", "Singapore", "SouthAfrica", "SouthKorea", "Spain", "Sweden", "Switzerland", 
                    "Taiwan", "Turkey", "UK", "USA"])
            .range([ "#984ea3", "#8DC348", "#B6E9A7", "#A7DFE9", "#36570C", "#B55517", "#FF5733", "#FFAC33", "#0DE30D", "#FCFF33", 
                    "#C1C348",  "#4daf4a","#377eb8","#ff7f00","#E3610D","#e41a1c", "#0C6D0C", "#0C6D3E", 
                    "#589578", "#588295",  "#7496EA","#DDD5E3","#E320D7","#B496A0","#B496B2", "#B420E3", 
                    "#B674EA", "#74C6EA"])

        //console.log(d.country);
        
        
        // Highlight the specie that is hovered
        var highlightteaching = function(d){
        
            countries = d.country
            //alert(countries);

            tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
            tooltip.html(d.country)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        
            d3.select("#scene9").selectAll(".dot")
            .transition()
            .duration(200)
            .style("fill", "lightgrey")
            .attr("r", 1)
        
            d3.select("#scene9").selectAll("." + countries)
            .transition()
            .duration(200)
            .style("fill", color(countries))
            .attr("r", 4)
        }
        
        // Highlight the specie that is hovered
        var doNotHighlightteaching = function(){

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);

            d3.select("#scene9").selectAll(".dot")
            .transition()
            .duration(200)
            .style("fill", function (d) { return color(d.country) } )
            .attr("r", 2 )
        }
        
        // Add dots
        svgscene9.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", function (d) { return "dot " + d.country } )
                .attr("cx", function (d) { return xScale9(d.teaching_score); } )
                .attr("cy", function (d) { return yScale9(d.total_score); } )
                .attr("r", 2)
                .style("fill", "#69b3a2")
                .style("fill", function (d) { return color(d.country) } )
            .on("mouseover", highlightteaching)
            .on("mouseleave", doNotHighlightteaching )
            


        /*const annotations = [
            {
                note: {
                label: "Here is the annotation label",
                title: "Annotation title"
                },
                x: 100,
                y: 100,
                dy: 100,
                dx: 100
            }
        ]*/

        const annotations = [
            {
              note: {
                label: "There is a +Ve correlation",
                title: "Correlation between Traching Score and Total Score"
              },
              connector: {
                end: "dot",        // Can be none, or arrow or dot
                type: "line",      // ?? don't know what it does
                lineType : "vertical",    // ?? don't know what it does
                endScale: 10     // dot size
              },
              color: ["blue"],
              x: 210,
              y: 140,
              dy: 70,
              dx: 70
            }
        ]
        

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        svgscene9.append("g")
            .call(makeAnnotations)
    
    })
}


async function load10() {


    var margin = {top: 10, right: 30, bottom: 50, left: 60};
    var width = 460 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var svgscene10 = d3.select("#scene10")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    var tooltip = d3.select("body").append("div")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "black")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("color", "white")

    d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016.csv").then(function (data) {

        //console.log(data)

        // Add X axis
        var xScale10 = d3.scaleLinear()
            /*.domain([d3.min(data, function(d){ return d.research_score; }) - 10, 
                    d3.max(data, function(d){ return d.research_score; }) + 10])*/
            .domain([10, 100])
            .range([ 0, width ]);

        svgscene10.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale10));
        
        // Add Y axis
        var yScale10 = d3.scaleLinear()
            .domain([d3.min(data, function(d){ return d.total_score; }), 
                    d3.max(data, function(d){ return d.total_score; })])
            .range([ height, 0]);

        svgscene10.append("g")
            .call(d3.axisLeft(yScale10));

        svgscene10.append('text')
            .attr('x', 200)
            .attr('y', 380)
            .attr('text-anchor', 'middle')
            .text('Total Score')
        
        svgscene10.append('text')
            .attr('x', -150)
            .attr('y', -40)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('Research Score')

        
        // Color scale: give me a specie name, I return a color
        var colorresearch = d3.scaleOrdinal()
            .domain(["Australia", "Austria", "Belgium", "Brazil", "Canada", "China", "Denmark", "Finland", 
                    "France", "Germany", "HongKong", "Israel", "Italy", "Japan", "Netherlands", "NewZealand", 
                    "Norway", "Ireland", "Singapore", "SouthAfrica", "SouthKorea", "Spain", "Sweden", "Switzerland", 
                    "Taiwan", "Turkey", "UK", "USA"])
            .range([ "#984ea3", "#8DC348", "#B6E9A7", "#A7DFE9", "#36570C", "#B55517", "#FF5733", "#FFAC33", "#0DE30D", "#FCFF33", 
                    "#C1C348",  "#4daf4a","#377eb8","#ff7f00","#E3610D","#e41a1c", "#0C6D0C", "#0C6D3E", 
                    "#589578", "#588295",  "#7496EA","#DDD5E3","#E320D7","#B496A0","#B496B2", "#B420E3", 
                    "#B674EA", "#74C6EA"])

        //console.log(d.country);
        
        
        // Highlight the specie that is hovered
        var highlightresearch = function(d){
        
            countries = d.country
            //alert(countries);

            tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
            tooltip.html(d.country)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        
            d3.select("#scene10").selectAll(".dot")
            .transition()
            .duration(200)
            .style("fill", "lightgrey")
            .attr("r", 1)
        
            d3.select("#scene10").selectAll("." + countries)
            .transition()
            .duration(200)
            .style("fill", colorresearch(countries))
            .attr("r", 4)
        }
        
        // Highlight the specie that is hovered
        var doNotHighlightresearch = function(){

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);

            d3.select("#scene10").selectAll(".dot")
            .transition()
            .duration(200)
            .style("fill", function (d) { return colorresearch(d.country) } )
            .attr("r", 2 )
        }
        
        // Add dots
        svgscene10.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", function (d) { return "dot " + d.country } )
                .attr("cx", function (d) { return xScale10(d.research_score); } )
                .attr("cy", function (d) { return yScale10(d.total_score); } )
                .attr("r", 2)
                .style("fill", "#69b3a2")
                .style("fill", function (d) { return colorresearch(d.country) } )
            .on("mouseover", highlightresearch)
            .on("mouseleave", doNotHighlightresearch )

            const annotations = [
                {
                  note: {
                    label: "There is a +Ve correlation",
                    title: "Correlation between Research Score and Total Score"
                  },
                  connector: {
                    end: "dot",        // Can be none, or arrow or dot
                    type: "line",      // ?? don't know what it does
                    lineType : "vertical",    // ?? don't know what it does
                    endScale: 10     // dot size
                  },
                  color: ["blue"],
                  x: 210,
                  y: 140,
                  dy: 70,
                  dx: 70
                }
            ]
            
    
            const makeAnnotations = d3.annotation()
                .annotations(annotations)
            svgscene10.append("g")
                .call(makeAnnotations)
    
    })
}

async function load11() {


    var margin = {top: 10, right: 30, bottom: 50, left: 60};
    var width = 460 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var svgscene11 = d3.select("#scene11")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    var tooltip = d3.select("body").append("div")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "black")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("color", "white")

    d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016.csv").then(function (data) {

        //console.log(data)

        // Add X axis
        var xScale10 = d3.scaleLinear()
            /*.domain([d3.min(data, function(d){ return d.research_score; }) - 10, 
                    d3.max(data, function(d){ return d.research_score; }) + 10])*/
            .domain([10, 100])
            .range([ 0, width ]);

        svgscene11.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale10));
        
        // Add Y axis
        var yScale10 = d3.scaleLinear()
            .domain([d3.min(data, function(d){ return d.total_score; }), 
                    d3.max(data, function(d){ return d.total_score; })])
            .range([ height, 0]);

        svgscene11.append("g")
            .call(d3.axisLeft(yScale10));

        svgscene11.append('text')
            .attr('x', 200)
            .attr('y', 380)
            .attr('text-anchor', 'middle')
            .text('Total Score')
        
        svgscene11.append('text')
            .attr('x', -150)
            .attr('y', -40)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('Citation Score')

        
        // Color scale: give me a specie name, I return a color
        var colorcitation = d3.scaleOrdinal()
            .domain(["Australia", "Austria", "Belgium", "Brazil", "Canada", "China", "Denmark", "Finland", 
                    "France", "Germany", "HongKong", "Israel", "Italy", "Japan", "Netherlands", "NewZealand", 
                    "Norway", "Ireland", "Singapore", "SouthAfrica", "SouthKorea", "Spain", "Sweden", "Switzerland", 
                    "Taiwan", "Turkey", "UK", "USA"])
            .range([ "#984ea3", "#8DC348", "#B6E9A7", "#A7DFE9", "#36570C", "#B55517", "#FF5733", "#FFAC33", "#0DE30D", "#FCFF33", 
                    "#C1C348",  "#4daf4a","#377eb8","#ff7f00","#E3610D","#e41a1c", "#0C6D0C", "#0C6D3E", 
                    "#589578", "#588295",  "#7496EA","#DDD5E3","#E320D7","#B496A0","#B496B2", "#B420E3", 
                    "#B674EA", "#74C6EA"])

        //console.log(d.country);
        
        
        // Highlight the specie that is hovered
        var highlightcitation = function(d){
        
            countries = d.country
            //alert(countries);

            tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
            tooltip.html(d.country)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        
            d3.select("#scene11").selectAll(".citation")
            .transition()
            .duration(200)
            .style("fill", "lightgrey")
            .attr("r", 1)
        
            d3.select("#scene11").selectAll("." + countries)
            .transition()
            .duration(200)
            .style("fill", colorcitation(countries))
            .attr("r", 4)
        }
        
        // Highlight the specie that is hovered
        var doNotHighlightcitation = function(){

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);

            d3.select("#scene11").selectAll(".citation")
            .transition()
            .duration(200)
            .style("fill", function (d) { return colorcitation(d.country) } )
            .attr("r", 2 )
        }
        
        // Add dots
        svgscene11.append('g')
            .selectAll("citation")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", function (d) { return "citation " + d.country } )
                .attr("cx", function (d) { return xScale10(d.citations_score); } )
                .attr("cy", function (d) { return yScale10(d.total_score); } )
                .attr("r", 2)
                .style("fill", "#69b3a2")
                .style("fill", function (d) { return colorcitation(d.country) } )
            .on("mouseover", highlightcitation)
            .on("mouseleave", doNotHighlightcitation )

        const annotations = [
            {
                note: {
                label: "There is no correlation",
                title: "Correlation between Citation Score and Total Score"
                },
                /*connector: {
                end: "dot",        // Can be none, or arrow or dot
                type: "line",      // ?? don't know what it does
                lineType : "vertical",    // ?? don't know what it does
                endScale: 10     // dot size
                },*/
                color: ["blue"],
                x: 0,
                y: 0,
                dy: 20,
                dx: 20
            }
        ]
        

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        svgscene11.append("g")
            .call(makeAnnotations)
    
    })
}

async function load12() {


    var margin = {top: 10, right: 30, bottom: 50, left: 60};
    var width = 460 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var svgscene12 = d3.select("#scene12")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    var tooltip = d3.select("body").append("div")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "black")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("color", "white")

    d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016.csv").then(function (data) {

        //console.log(data)

        // Add X axis
        var xScale12 = d3.scaleLinear()
            /*.domain([d3.min(data, function(d){ return d.research_score; }) - 10, 
                    d3.max(data, function(d){ return d.research_score; }) + 10])*/
            .domain([0, 60])
            .range([ 0, width ]);

        svgscene12.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale12));
        
        // Add Y axis
        var yScale12 = d3.scaleLinear()
            .domain([d3.min(data, function(d){ return d.total_score; }), 
                    d3.max(data, function(d){ return d.total_score; })])
            .range([ height, 0]);

        svgscene12.append("g")
            .call(d3.axisLeft(yScale12));

        svgscene12.append('text')
            .attr('x', 200)
            .attr('y', 380)
            .attr('text-anchor', 'middle')
            .text('Total Score')
        
        svgscene12.append('text')
            .attr('x', -150)
            .attr('y', -40)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('International Student Percentage')

        
        // Color scale: give me a specie name, I return a color
        var colorinternational = d3.scaleOrdinal()
            .domain(["Australia", "Austria", "Belgium", "Brazil", "Canada", "China", "Denmark", "Finland", 
                    "France", "Germany", "HongKong", "Israel", "Italy", "Japan", "Netherlands", "NewZealand", 
                    "Norway", "Ireland", "Singapore", "SouthAfrica", "SouthKorea", "Spain", "Sweden", "Switzerland", 
                    "Taiwan", "Turkey", "UK", "USA"])
            .range([ "#984ea3", "#8DC348", "#B6E9A7", "#A7DFE9", "#36570C", "#B55517", "#FF5733", "#FFAC33", "#0DE30D", "#FCFF33", 
                    "#C1C348",  "#4daf4a","#377eb8","#ff7f00","#E3610D","#e41a1c", "#0C6D0C", "#0C6D3E", 
                    "#589578", "#588295",  "#7496EA","#DDD5E3","#E320D7","#B496A0","#B496B2", "#B420E3", 
                    "#B674EA", "#74C6EA"])

        //console.log(d.country);
        
        
        // Highlight the specie that is hovered
        var highlightinternational = function(d){
        
            countries = d.country
            //alert(countries);

            tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
            tooltip.html(d.country)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        
            d3.select("#scene12").selectAll(".international")
            .transition()
            .duration(200)
            .style("fill", "lightgrey")
            .attr("r", 1)
        
            d3.select("#scene12").selectAll("." + countries)
            .transition()
            .duration(200)
            .style("fill", colorinternational(countries))
            .attr("r", 4)
        }
        
        // Highlight the specie that is hovered
        var doNotHighlightinternational = function(){

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);

            d3.select("#scene12").selectAll(".international")
            .transition()
            .duration(200)
            .style("fill", function (d) { return colorinternational(d.country) } )
            .attr("r", 2 )
        }
        
        // Add dots
        svgscene12.append('g')
            .selectAll("international")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", function (d) { return "international " + d.country } )
                .attr("cx", function (d) { return xScale12(d.international_students); } )
                .attr("cy", function (d) { return yScale12(d.total_score); } )
                .attr("r", 2)
                .style("fill", "#69b3a2")
                .style("fill", function (d) { return colorinternational(d.country) } )
            .on("mouseover", highlightinternational)
            .on("mouseleave", doNotHighlightinternational )

        const annotations = [
            {
                note: {
                label: "There is no correlation",
                title: "Correlation between International stusent percentage and Total Score"
                },
                connector: {
                end: "dot",        // Can be none, or arrow or dot
                type: "line",      // ?? don't know what it does
                lineType : "vertical",    // ?? don't know what it does
                endScale: 10     // dot size
                },
                color: ["blue"],
                x: 270,
                y: 150,
                dy: 20,
                dx: 20
            }
        ]
        

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        svgscene12.append("g")
            .call(makeAnnotations)
    
    })
}

// --------------------------------------------------------------------------------// 
// SCENE TWO ----------------------------------------------------------------------//
// --------------------------------------------------------------------------------// 

var world_ranking_grade = ["1", "2", "3", "4", "5", "6", "7", "8"]
var myColor = d3.scaleOrdinal()
    .domain(world_ranking_grade)
    .range(["#F2360E", "#F27D0E", "#CB7E35", "#CBA435", "#E9D82F",
        "#D2E92F", "#A8E92F", "#77A919"]);

var tooltip = d3.select("body").append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

// Legend
var size = 15
scene2.selectAll("legend")
    .data(world_ranking_grade)
    .enter()
    .append("rect")
    .attr("x", 100)
    .attr("y", function (d, i) { return 40 + i * (size + 5) })
    .attr("width", size)
    .attr("height", size)
    .attr("stroke", "black")
    .style("fill", function (d) { return myColor(d) })
    .on("mouseover", function (d) { highlight(d) })
    .on("mouseleave", function (d) { noHighlight(d) })

scene2.selectAll("labels")
    .data(world_ranking_grade)
    .enter()
    .append("text")
    .attr("x", 100 + size * 1.2)
    .attr("y", function (d, i) { return 40 + i * (size + 5) + (size / 2) })
    .style("fill", function (d) { return "black" })
    .text(function (d) { return d })
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
    .on("mouseover", highlight)
    .on("mouseleave", noHighlight)

// Annotation
scene2.append('rect')
    .attr("x", 240)
    .attr("y", 100)
    .attr("width", 530)
    .attr("height", 30)
    .style("fill", 'lightblue')

scene2.append('text')
    .attr("x", 250)
    .attr("y", 120)
    .attr("width", 60)
    .attr("height", 20)
    .style("fill", 'black')
    .text("More female than male student correlated with better university ranking.")
    .attr("stroke", "#0000FF")
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")

var highlight = function (d) {
    scene2.selectAll(".datapt").style("opacity", .05)
    scene2.selectAll(".a" + d).style("opacity", 1)
}

var noHighlight = function (d) {
    d3.selectAll(".datapt").style("opacity", 1)
}

async function load2() {
    d3.csv("https://csarkar1983.github.io/testrepo/data/timesData_2016.csv").then(function (d) {
        scene2.selectAll("div")
            .append("g")
            .data(d)
            .enter()
            .append("circle")
            .attr("class", function (d) { return "datapt " + "a" + d.world_rank_grade })
            .attr("cx", function (d) { return d.female_male_ratio*11})
            .attr("cy", function (d) { return 300 })
            .attr("r", "10")
            .attr("fill", function (d) { return myColor(d.world_rank_grade); })
            .attr("transform", "translate(50,-30)");
            /*.on("mouseover", function (d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(d.female_male_ratio)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });*/

            const annotations = [
                {
                    note: {
                    label: "More female student makes the university rank better.",
                    title: "Correlation between female percentage ratio and world rank"
                    },
                    connector: {
                    end: "dot",        // Can be none, or arrow or dot
                    type: "line",      // ?? don't know what it does
                    lineType : "vertical",    // ?? don't know what it does
                    endScale: 10     // dot size
                    },
                    color: ["blue"],
                    x: 870,
                    y: 70,
                    dy: 20,
                    dx: 20
                }
            ]
            
    
            const makeAnnotations = d3.annotation()
                .annotations(annotations)
            scene2.append("g")
                .call(makeAnnotations)
    })
}