#import "@local/stdlib:0.1.0"
#import "@local/stdlib:0.1.0": exists, tern
#import "@preview/cetz:0.2.2"
#import cetz.draw: *

#let arrows(start, amount, dir: "x") = {
    // arrows start amount dir
    let pos = start
    let k = if dir == "x" {
        
    } else {
        
    }

    for i in range(amount) {
        line(pos, ..arrow-opts)
    }
}

#let dotted(color) = {
    return (
        paint: color,
        dash: "densely-dotted",
        thickness: 0.5pt,
    )
}

#let small-big(a, b) = {
    if a.first() > b.first() {
        (b, a)
    } else {
        (a, b)
    }
}



#let draw-point-label(pos, dir, display: false, point: none) = {
    let x1y1-x2y2-ref = (
        ($x_1$, $y_1$),
        ($x_2$, $y_2$),
    )
    let index = tern(dir == "x", 0, 1)
    let values = if display == true and exists(point) {
        point
    } else {
        x1y1-x2y2-ref.at(index)
    }
    let (a, b) = values
    content(pos, stdlib.typography.small($(#a, #b)$))
}

#let draw-brace-content(pos, dir, anchor, color: none, display: false, points: none) = {
    let x1x2-y1y2-ref = (
        ($x_1$, $x_2$),
        ($y_1$, $y_2$),
    )
    let index = tern(dir == "x", 0, 1)
    let (a, b) = if display == true and exists(points) {
        points.map((x) => x.at(index))
    } else {
        x1x2-y1y2-ref.at(index)
    }

    // bm: bc1
    let dimension = tern(dir == "x", "width", "height")
    let value = text(size: 8pt, [
        #text(fill: color, $#sym.Delta #dir$)
        $= #b - #a$
        #v(-2pt)
        represents the *#text(fill: color, dimension)* of the triangle.
    ])
    if anchor == "east" {
        pos = (rel: (10pt, 0), to: pos)
    }
    let val = box(width: 60pt, inset: 0pt, value)
    content(pos, val, anchor: anchor, name: dir + "-brace-content")
    // content(pos, value)
}

/// ### slope-triangle ###
/// draws a slope triangle for 2 points
/// 
/// - a (coordinate): Start position
/// - b (coordinate): End position
/// - placement (str): 
///      - below: the triangle is below the curve
///      - above: the triangle is above the curve
///
/// - display (dictionary):
/// - style (dictionary):
///      - x (dictionary):
///      - y (dictionary):
/// -> canvas-content

#let slope-triangle(a, b, placement: "below", display: false, x-color: blue, y-color: purple, display-abc: false, display-arrows: false, display-slope: false) = cetz.canvas({

    // small-big forces x1 to be smaller than x2
    // by swapping the points (if necessary)
    let (a, b) = small-big(a, b)

    let is-positive-slope = stdlib.math.slope(a, b) > 0
    let key = tern(is-positive-slope, "plus", "minus")

    let (x1, y1) = a
    let (x2, y2) = b

    let c = if is-positive-slope {
        if placement == "below" {
            (x2, y1)
        } else {
            (x1, y2)
        }
    } else {
        if placement == "below" {
            (x1, y2)
        } else {
            (x2, y1)
        }
    }


    let (h-brace-content-anchor, v-brace-content-anchor) = if is-positive-slope {
        if placement == "below" {
            ("north", "west")
        } else {
        }
    } else {
        if placement == "below" {
            ("north", "east")
        } else {
        }
    }
    let (h-point-anchor, v-point-anchor) = if is-positive-slope {
        if placement == "below" {
            (a, b)
        } else {
            (b, a)
        }
    } else {
        if placement == "below" {
            (b, a)
        } else {
            (a, b)
        }
    }

    set-style(
        circle: (
            radius: 1.5pt,
            fill: black
        ),
    )

    // # draw the points
    // a_x < b_x
    // p1 goes first
    // p2 goes second
    let p1 = circle(a)
    let p2 = circle(b)

    p1
    p2

    // # draw the labels for the points
    // but first we have to obtain the label positions
    let k = 0.5 
    let k = 1
    let (p1-label-rel-pos, p2-label-rel-pos) = if is-positive-slope {
        if placement == "below" {
            // south-west to the point
            // north-east to the point
            // ( (-k, -k), (k, k) )
            ( (-0.5, k / 2), (0, 0.5 * k) )
        } else {
            // ( (-k, k), (k, -k) )
            ( (-0, 0.5), (0, 0.5) )
        }
    } else {
        if placement == "below" {
            ( (-0, 0.5), (0.5, 0.5) )
        } else {
            ( (-k, -k), (k, k) )
        }
    }

    let p1-label-pos = (rel: p1-label-rel-pos, to: a)
    let p2-label-pos = (rel: p2-label-rel-pos, to: b)

    draw-point-label(p1-label-pos, "x", point: a, display: display)
    draw-point-label(p2-label-pos, "y", point: b, display: display)
    

    // # draw the brackets
    // first, determine whether the brace needs to be flipped
    let (h-flip, v-flip) = if is-positive-slope {
        if placement == "below" {
            (true, false)
        } else {
            (false, true)
        }
    } else {
        if placement == "below" {
            (false, true)
        } else {
            (true, false)
        }
    }
    // first, we create shift functions

    let shift-h-south = (x, shift) => (rel: (0, -shift), to: x)
    let shift-v-east = (x, shift) => (rel: (shift, 0), to: x)
    let shift-h-north = (x, shift) => (rel: (0, shift), to: x)
    let shift-v-west = (x, shift) => (rel: (-shift, 0), to: x)
    let (relatize-x, relatize-y) = if is-positive-slope {
        if placement == "below" {
            (shift-h-south, shift-v-east)
        } else {
            (shift-h-north, shift-v-west)
        }
    } else {
        if placement == "below" {
            (shift-h-south, shift-v-west)
        } else {
            (shift-h-south, shift-v-east)
        }
    }

    // now we have the points for the brace
    let shift = 0.25
    // FIX: the brace needs to shift a little less (maybe 0.3)
    let h-points = (h-point-anchor, c).map((x) => relatize-x(x, shift))
    let v-points = (v-point-anchor, c).map((x) => relatize-y(x, shift))

    let h-brace-opts = (
        stroke: dotted(x-color),
        name: "h-brace",
        flip: h-flip,
        // TODO: play around with these values
        // to find a value that works
        // perhaps they should be dynamic based on the lengths
    )
    let base-opts = (
        amplitude: .3,
        pointiness: 10deg,
        outer-pointiness: 0deg,
        content-offset: 0.5,
    )
    let h-brace = cetz.decorations.brace(..h-points, ..h-brace-opts, ..base-opts)

    let v-brace-opts = (
        stroke: dotted(y-color),
        name: "v-brace",
        flip: v-flip,
    )
    let v-brace = cetz.decorations.brace(..v-points, ..v-brace-opts, ..base-opts)

    /// draw the braces
    h-brace
    v-brace


    /// draw the text content that goes with the brace
    // again, a shift is required
    let shift = 0.15
    let h-brace-center = relatize-x("h-brace.spike", shift)
    let v-brace-center = relatize-y("v-brace.spike", shift)

    draw-brace-content(h-brace-center, "x", h-brace-content-anchor, color: x-color, display: display, points: (a, b))
    draw-brace-content(v-brace-center, "y", v-brace-content-anchor, color: y-color, display: display, points: (a, b))

    // # draw arrow movements
    // # todo
    // stdlib.visualize.point("")
    // stdlib.visualize.point("y-brace-content.west")
    // let direction = "west"
    // let arrow-direction = "down"
    // the anchor tells you how to navigate
    // let y-arrow-pos = "y-brace-content" + direction

    // let x-arrow-pos = "x-brace-content.south"
    // let dx = x2 - x1
    // let dy = y2 - y1
    // let arrow-direction = stdlib.math.magnitude(dy)
    // let abs-dy = math.abs(dy)


    // let x-start = c
    // let y-start = a
    // arrows(x-start, dx, dir: "x")
    // arrows(y-start, dy, dir: "y")
    // range(dx).map(stdlib.visualize.arrow.with(length: )



    // # draw the final triangle
    let line-opts = (
        close: true,
        stroke: (
            thickness: 0.75pt,
            paint: black
        )
    )
    line(a, b, c, ..line-opts)

    // # draw arrow movements
})

#{
    let a1 = (2, 4)
    let a2 = (7, 6)
    let b = (5, 8)
    // slope-triangle(a1, b)
    // slope-triangle(a2, b, display-arrows: true)
    // panic("HI")
    slope-triangle(a1, b, display: true)
    slope-triangle(a2, b, display: true)
}

//  /home/kdog3682/bkl/math/slope/0.1.0/slope-triangle.typ
// /home/kdog3682/.cache/typst/packages/preview/cetz/0.2.2/src/lib/decorations/brace.typ
// #import "@preview/cetz:0.2.0"
// #cetz.canvas({
  // import cetz.draw: *
  
// })



// /home/kdog3682/.local/share/typst/packages/local/stdlib/0.1.0/src/is.typ
// /home/kdog3682/.local/share/typst/packages/local/stdlib/0.1.0/src/math.typ
