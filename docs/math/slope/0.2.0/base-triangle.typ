#import "@preview/cetz:0.2.2"
#import cetz.draw: *
#import "@local/stdlib:0.1.0" as stdlib: *
#import "@local/geosketch:0.1.0"

#let base-triangle(a, b, ..style) = {
    let style = stdlib.styles.resolve(style, "slope-triangle")
    let (a, b) = small-big(a, b)

    if exists(style.dotted) {
        set-style(circle: style.circle-style)
        circle(a)
        circle(b)
    }

    let is-positive-slope = stdlib.math.slope(a, b) > 0
    let key = tern(is-positive-slope, "plus", "minus")

    ifes
}


#let main(a, b, ..opts) = {
    let (a, b) = small-big(a, b)
    let annotations = slope-triangle()
    let opts = stdlib.styles.resolve(opts, "slope-triangle")
    geosketch.templates.schoolbook()
)

#panic(base-triangle(1, 2, dotted: true))
