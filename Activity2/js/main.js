/* main JS file */
var sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
];
// Append a new SVG element to your HTML document with D3 (Width: 500px, Height: 500px)
var svg = d3.select("body").append("svg")
            .attr("width", 1000)
            .attr("height", 1000)

  svg.selectAll("circle")
    .data(sandwiches)
	.enter()
	.append("circle")
	.attr("fill", "red")
    .attr("r", function(d, index){
        console.log(d.size);
        if (d.size=="large"){
            return 50;
        }else{
            return 25;
        }
    })
	.attr("cy", 70)
	.attr("cx", function(d, index) {
		return ((index+1) * 125);
    })
    .attr("fill", function(d,index){
        if (d.price<7){
            return "Green";
        }else{
            return "Blue";
        }
    })
    .attr("stroke", "Black"); 

