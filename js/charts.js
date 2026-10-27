var chart = "state_chart.vg.json";

vegaEmbed("#state-chart", chart, {
  actions: false
})
  .then(function (result) {
    console.log("State chart loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading state chart:", error);
  });

vegaEmbed("#disaster-map", "disaster_map.vg.json", {
  actions: false
})
  .then(function (result) {
    console.log("Disaster map loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading disaster map:", error);
  });

vegaEmbed("#calendar-heatmap", "calendar_heatmap.vg.json", {
  actions: false
})
  .then(function (result) {
    console.log("Calendar heatmap loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading calendar heatmap:", error);
  });

vegaEmbed("#yearly-trend", "yearly_trend.vg.json", {
  actions: false
})
  .then(function (result) {
    console.log("Yearly trend chart loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading yearly trend chart:", error);
  });

  vegaEmbed("#lollipop-chart", "lollipop_chart.vg.json", {
  actions: false
})
  .then(function () {
    console.log("Lollipop chart loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading lollipop chart:", error);
  });

  vegaEmbed("#treemap", "treemap.vg.json", {
  actions: false
})
  .then(function () {
    console.log("Treemap loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading treemap:", error);
  });

  vegaEmbed("#deaths_chart", "deaths_chart.vg.json", {
  actions: false
})
  .then(function () {
    console.log("Deaths chart loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading deaths chart:", error);
  });

  vegaEmbed("#connected-dot-plot","connected_dot_plot.vg.json",{ 
  actions: false 
})
  .then(function () {
    console.log("Connected dot plot loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading connected dot plot:", error);
  });

  vegaEmbed("#dot-plot", "dot_plot.vg.json", {
  actions: false
})
  .then(function () {
    console.log("Dot plot loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading dot plot:", error);
  });
