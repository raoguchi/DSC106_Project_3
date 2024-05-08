const margin = {top: 50, right: 50, bottom: 50, left: 50};
const width = 400 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

const svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Load the data from the JSON file
d3.json("imanaga.json").then(function(data) {
    // Set up scales for x and y axes
    const x = d3.scaleLinear()
        .domain([d3.min(data, d => d.plate_x), d3.max(data, d => d.plate_x)])
        .range([0, width]);

    const y = d3.scaleLinear()
        .domain([d3.min(data, d => d.plate_z), d3.max(data, d => d.plate_z)])
        .range([height, 0]);
    
    const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.pitch_type))
        .range(d3.schemeCategory10)

    // Create and append x-axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Create and append y-axis
    svg.append("g")
        .call(d3.axisLeft(y));

    // Create and append circles for each data point
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => x(d.plate_x))
        .attr("cy", d => y(d.plate_z))
        .attr("r", 5)
        .attr('fill', d => colorScale(d.pitch_type));
});