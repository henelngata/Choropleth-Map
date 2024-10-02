// Fetch the required data
Promise.all([
    d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json'),
    d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json')
]).then(([countyData, educationData]) => {
    const width = 960;
    const height = 600;

    // Create SVG
    const svg = d3.select('#map-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Create tooltip
    const tooltip = d3.select('body')
        .append('div')
        .attr('id', 'tooltip')
        .style('opacity', 0);

    // Create color scale
    const colorScale = d3.scaleThreshold()
        .domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8))
        .range(d3.schemeBlues[9]);

    // Create legend
    const legend = d3.select('#legend')
        .append('svg')
        .attr('width', 300)
        .attr('height', 50);

    const legendScale = d3.scaleLinear()
        .domain([2.6, 75.1])
        .range([0, 240]);

    const legendAxis = d3.axisBottom(legendScale)
        .tickSize(13)
        .tickValues(colorScale.domain())
        .tickFormat(d => Math.round(d) + '%');

    legend.append('g')
        .attr('transform', 'translate(30, 0)')
        .call(legendAxis);

    legend.append('g')
        .selectAll('rect')
        .data(colorScale.range().map(d => colorScale.invertExtent(d)))
        .enter()
        .append('rect')
        .attr('height', 8)
        .attr('x', d => legendScale(d[0]))
        .attr('width', d => legendScale(d[1]) - legendScale(d[0]))
        .attr('fill', d => colorScale(d[0]))
        .attr('transform', 'translate(30, 0)');

    // Draw map
    svg.append('g')
        .selectAll('path')
        .data(topojson.feature(countyData, countyData.objects.counties).features)
        .enter()
        .append('path')
        .attr('class', 'county')
        .attr('data-fips', d => d.id)
        .attr('data-education', d => {
            const result = educationData.find(item => item.fips === d.id);
            return result ? result.bachelorsOrHigher : 0;
        })
        .attr('fill', d => {
            const result = educationData.find(item => item.fips === d.id);
            return result ? colorScale(result.bachelorsOrHigher) : colorScale(0);
        })
        .attr('d', d3.geoPath())
        .on('mouseover', (event, d) => {
            const result = educationData.find(item => item.fips === d.id);
            tooltip.style('opacity', 0.9)
                .html(`${result.area_name}, ${result.state}: ${result.bachelorsOrHigher}%`)
                .attr('data-education', result.bachelorsOrHigher)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', () => {
            tooltip.style('opacity', 0);
        });
});
