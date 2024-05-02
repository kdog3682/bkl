#import "@local/stdlib:0.1.0" as stdlib: *
#import "@local/geosketch:0.1.0"
#import "@preview/cetz:0.2.2"
#import layout: *
#let geosketch-templates = dictionary(geosketch.templates)

#let diagram(name: none, ..sink) = context context {
  let r = rect(fill: blue, stroke: black, inset: 10pt, radius: 5pt, {
    set text(fill: white)
    let t = text(name)
    let length = measure(t).width
    align(t, center)
    let body = box(inset: (x: 3pt), stroke: none, fill: white, text("diagram", size: 8pt, weight: "bold"))
    //place(clearance: 0pt, dx: -3pt, dy: -20pt, body)
    if sink.named().len() > 0{
      v(-6pt)
      line(length: length)
      v(-3pt)
      set text(size: 0.8em)
      for (key, value) in sink.named() {
        [*#key*: #value]
      }
    }
  })
  r
  // let t = text(size: .8em, weight: "bold", "diagram")
  // let item = box(fill: white, t, inset: (x: 5pt))
  // let length = measure(r)
  // place(item, dy: -3pt, dx: length.width - 50pt)
}

#let frac(a, b) = {
  $display(#a/#b)$

#let equation-from-points(p1, p2) = {
    let s = stdlib.math.slope(p1, p2)
    let yint = p1.first() - s * p1.last()
    return (x) => s * x + yint
}

#let graph(background: "schoolbook", points: none, equation: none) = {
    let template = geosketch-templates(background)
    if equation == none {
        equation = equation-from-points(points)
    }

    let plots = cetz.plot.add(domain: (-5, 5), equation)
    let annotations = points.map(geosketch.point-label)
    template(plots: plots, annotations: annotations)
}

