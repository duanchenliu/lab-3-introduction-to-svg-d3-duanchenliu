/* main JS file */
// d3.csv("data/sandwiches.csv", function(data) {
	
// });

d3.csv('data/cities.csv')
  .then(function(data) {
	// data is now whole data set
    // draw chart in here!
	// console.log("Data loading complete. Work with dataset.");
	// console.log(data);
	// console.log(typeof(data));
	// console.log(data[0]);
	filtered = data.filter(function(data){
		return (data.eu=="true");
	});
	countnum = filtered.length;
	console.log(filtered);
	d3.select("body").append("div").append("p").text("Number of cities: " + countnum);
	prepareData(filtered, countnum);

	// Draw SVG circle:
	var svg = d3.select("body").append("svg")
            .attr("width", 700)
			.attr("height", 550)
			
	svg.selectAll("circle")
       .data(filtered)
	   .enter()
	   .append("circle")
	   .attr("fill", "Orange")
	   .attr("r", function(d, index){
		   if (d.population<1000000){
			   return 4;
		   }else{
			   return 8;
		   }
	   })
	  .attr("cy", function(d, index){
		  return d.y;
	  })
	  .attr("cx", function(d,index){
		  return d.x;
	  });
	  
	  svg.selectAll("text")
		 .data(filtered)
		 .enter()
		 .append("text")
		 .attr("class", "city-label")
		 .text(function(d){
			 return d.city;
		 })
		 .attr("x", function(d,index){
			 return d.x;
		 })
		 .attr("y", function(d,index){
			 return d.y - 10;
		 })
		 .style("opacity", function(d,index){
			 if (d.population>=1000000){
				 return 1;
			 }else{
				 return 0;
			 }
		 });



		 

	//   .text("city-label",function(d,index){
	// 	  return d.city;
	//   });
	// .attr("cx", function(d, index) {
	// 	return ((index+1) * 125);
    // })
    // .attr("fill", function(d,index){
    //     if (d.price<7){
    //         return "Green";
    //     }else{
    //         return "Blue";
    //     }
    // })
    // .attr("stroke", "Black"); 
  })
  .catch(function(error){
     // handle error   
  })
  console.log("Do something else, without the data");

  function prepareData(dataset, len){
	  for (i =0; i<len; i++){
		  dataset[i].population = +dataset[i].population;
		  dataset[i].x= +dataset[i].x;
		  dataset[i].y= +dataset[i].y;
	  }
	//   console.log(typeof(dataset[0].population));
	  return;
  }