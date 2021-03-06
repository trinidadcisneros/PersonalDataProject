// Builds map with markers for restaurants
function buildMap(cuisine_category) {
  d3.json(`restaurants/${cuisine_category}`).then((data) => {
    var restaurant_lng = [];
    var restaurant_lat = [];
    data.forEach((d) => { 
      Object.entries(d).forEach(([key, value]) => {
        if (key === "restaurant_lat") {
          restaurant_lat.push(value);
        } if (key === "restaurant_lng") {
          restaurant_lng.push(value);
        } else {
        }
      });
    });
    console.log(restaurant_lng);
    console.log(restaurant_lat);

  });
}


// Will provide restaurant informaiton in side panel
function buildMetadata(business_id) {
  d3.json(`/restaurant/${business_id}`).then((data) => {
    var panel = d3.select("#sample-metadata");
    panel.html("");
    Object.entries(data).forEach(([key, value]) => {
    panel.append('h6').text(`${key}: ${value}`);
    });
  });

}

function getBusinessId(cuisine_category) {
    // Add the metadata for restaurant at init
    d3.json(`/restaurants/${cuisine_category}`).then(function (data) {
      first_restaurant_in_category = data[0]["restaurant_id"];
      console.log(first_restaurant_in_category);
      buildMetadata(first_restaurant_in_category);
    });
}

function buildChart(cuisine_category) {

  d3.json(`/restaurants/${cuisine_category}`).then(function (data) {
    var ratings = [];
    var ave_cost = [];
    data.forEach((d) => { 
      Object.entries(d).forEach(([key, value]) => {
        if (key === "restaurant_rating") {
          ratings.push(value);
        } if (key === "ave_cost") {
          ave_cost.push(value);
        } else {
        }
      });
    });
    console.log(ratings);
    console.log(ave_cost);

    var trace1 = {
      x: ratings,
      y: ave_cost,
      mode: 'markers',
      marker: {
        size: ave_cost,
        color: ratings
      }
    };

    var data1 = [trace1];
    
    // var layout = {
    //   title: "Average Cost (for two) versus Rating",
    //   xaxis: { title : "Restaurant Rating"},
    //   yaxis: { title : "Average cost for two ($)"}
    // };
    
    Plotly.plot("bubble", data1);
  });
}


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Add categories to dropdown menu
  d3.json("/cuisine_categories").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      console.log(sample);
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
  
  const first_category = sampleNames[0];
  var first_restaurant_in_category;

  // Add the metadata for restaurant at init
  d3.json(`/restaurants/${first_category}`).then(function (data) {
    first_restaurant_in_category = data[0]["restaurant_id"];
    console.log(first_restaurant_in_category);
    buildMetadata(first_restaurant_in_category);
  });
  });
}

  // Fetch new data each time a new sample is selected
function optionChanged(newSample) {
  // Plotly.deleteTraces('bubble', 0);
  console.log(newSample);
  getBusinessId(newSample);
  buildChart(newSample);
  buildMap(newSample);
  

}

// Initialize the dashboard
init();