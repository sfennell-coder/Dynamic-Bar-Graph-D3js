function main(){
    let dataPoints = [100,420,230,560,925]; //data points
    let width = 500,
    margin = 1,
    barHeight = 20;


    var scale = d3.scaleLinear()
                    .domain([d3.min(dataPoints), d3.max(dataPoints)])
                    .range([50, width]);
    var svg = d3.select('body').append('svg')
                    .attr('width', width)
                    .attr('height', barHeight * dataPoints.length);
    var group = svg.selectAll('g')
                    .data(dataPoints)
                    .enter()
                    .append('g')
                    .attr('transform', function(d,i){
                        return 'translate(0,' + i * barHeight + ')';
                    });
    group.append('rect')
                    .attr('width', function(d){
                        return scale(d);
                    })
                    .attr('height', barHeight - margin)
                    .transition()
                    .duration(1000);
    group.append('text')
                    .attr('x', function(d){
                        return (scale(d));
                    })
                    .attr('y', barHeight / 2)
                    .attr('dy', '.35em')
                    .text(function(d){return d;});

    group
        .on('mouseover', function(){
            d3.select(this).select('rect').style('fill', 'firebrick');
        })
        .on('mouseout', function(){
            d3.select(this).select('rect').style('fill', 'green');
        })

                    
    

    
}
