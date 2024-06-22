function main(){
    let dataPoints = [100,420,230,850,925]; //data points
    let width = 500,
    margin = 1,
    barHeight = 20,
    height = (barHeight+margin)*dataPoints.length; // <^ svg container

    var svg = d3.select('body') //create svg
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    var scale = d3.scaleLinear() // scale for bar dimensions
        .domain([d3.min(dataPoints), d3.max(dataPoints)])
        .range([50, 500])
}  