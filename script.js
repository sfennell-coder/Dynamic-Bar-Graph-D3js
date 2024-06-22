function main(){
    let dataPoints = [100,420,230,560,925]; //data points
    let width = 500,
    margin = 1,
    barHeight = 20,
    height = (barHeight+margin)*dataPoints.length; // <^ svg container

    var svg = d3.select('body') //create svg
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    var scale = d3.scaleLinear() // scale for bar dimensions
        .domain([0, d3.max(dataPoints)])
        .range([50, width]);

    var bar = svg.selectAll('g') // g elements within the svg 
        .data(dataPoints)
        .enter()
        .append('g')
        .attr('transform', function(d,i){return `translate(0,${i*(barHeight+margin)})`;});

    bar.append('rect') //group for rects (bars)
        .attr('width',0) //start ->
        .attr('height', barHeight)
        .transition() //add transition
        .duration(800)
        .attr('width', function(d){scale(d);}) //end !

    bar.append('text')
        .attr('x', function(d){return (scale(d));})
        .attr('y', barHeight/2)
        .attr('dy', '0.35em')
        .attr(function(d){return d;});
} 
