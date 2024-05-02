#import "@preview/cetz:0.2.2"
#import cetz.draw: *

#let bloop(points, dir, dimension, color) = {

    let relatizeY = (x) => (rel: (-0.3, 0), to: x)
    let relatizeX = (x) => (rel: (0, -0.3), to: x)
    let flip = dir== "y"
    let relatize= if flip { relatizeY } else { relatizeX }
    let contentShift= if flip { (-1.64, 0) } else { (0, -1.64) }
    let vertPoints = points.map(relatize)
    let vertBrace = cetz.decorations.brace(
        ..vertPoints, flip: flip, name: dir, stroke: color,
    )

    let vertContent = content(
        (rel: contentShift, to: dir + ".center"),
        block(width: 70pt)[
            #text(fill: color, $#sym.Delta #dir$)
            $= #dir _2 - #dir _1$
            #v(0.1em)
            represents the *#text(fill: color, dimension)* of the triangle.
        ]
    )

    vertBrace
    vertContent
}


#let label(point, num) = {
            content(
                (rel: (0.5, 0.5), to: point), [
                    $(#math.bold($x_#num$) , #math.bold($y_#num$))$
                ], anchor: "center",
            )
}

#let slope-triangle(a, b) = cetz.canvas({
    import cetz.plot

    let (a, b) = if a.first() > b.first() {
        (b, a)
    } else {
        (a, b)
    }

    let rightOrient = a.first() > 0
    let c = if rightOrient {
        (b.first(), a.last())
    } else {
        (a.first(), b.last())
    }
    let v = a
    let h = b

    set-style(circle: (radius: 0.1, fill: black))

    let vertPoints = (h, c)
    let horoPoints = (v, c)
    line(a, b, c, close: true)
    if rightOrient {
        label(h, "1")
        label(v, "2")
    } else {
        label(h, "1")
        label(v, "2")
    }
    bloop(vertPoints, "y", "height", blue)
    bloop(horoPoints, "x", "width", purple)
})

#let slope((x1, y1), (x2, y2)) = {
    return (x2 - x1) / (y2 - y1)
}

#let slope-triangle(a, b) = cetz.canvas({
    import cetz.plot

    let (a, b) = if a.first() > b.first() {
        (b, a)
    } else {
        (a, b)
    }

    let rightOrient = slope(a, b) > 0
})

#{
    let a = (3, 5)
    let b = (2, 3)

    // let a = (-3, 5)
    // let b = (2, 3)
    slope-triangle(a, b)
}

