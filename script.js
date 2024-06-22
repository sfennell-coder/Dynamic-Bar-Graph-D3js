function main(){
    let dataPoints = [100,420,230,850,925];
    let width = 500,
    margin = 1,
    barHeight = 20,
    height = (barHeight+margin)*dataPoints.length;

    var svg = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
}