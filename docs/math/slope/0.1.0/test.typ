#import "@preview/cetz:0.2.0"
#cetz.canvas({
  import cetz.draw: *
import cetz.chart
// Left - Basic
let data = (("A", 10), ("B", 20), ("C", 13))
group(name: "a", {
chart.barchart(size: (4, 3), data)
})
// Center - Clustered
let data = (("A", 10, 12, 22), ("B", 20, 1, 7), ("C", 13, 8, 9))
group(name: "b", anchor: "south-west", {
anchor("default", "a.south-east")
chart.barchart(size: (4, 3), mode: "clustered", value-key: (1,2,3), data)
})
// Right - Stacked
let data = (("A", 10, 12, 22), ("B", 20, 1, 7), ("C", 13, 8, 9))
group(name: "c", anchor: "south-west", {
anchor("default", "b.south-east")
chart.barchart(size: (4, 3), mode: "stacked", value-key: (1,2,3), data)
})
})
